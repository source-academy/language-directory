import { Button, Card, CardList, Checkbox, EditableText, OverlayToaster, Tooltip, type ToastProps } from '@blueprintjs/core';
import type * as monaco from 'monaco-editor';
import { useRef, useState } from 'react';

interface ColourValueFieldProps {
  value: string;
  onChange?: (newValue: string) => void;
}

function ColourValueField({ value, onChange }: ColourValueFieldProps) {
  const [text, setText] = useState<string | null>(null);

  return <Tooltip
    content='Hex Colour Value'
    placement='top'
  >
    <EditableText
      value={text ?? value}
      onChange={newValue => {
        if (newValue.length <= 6) {
          setText(newValue);
        }
      }}
      onConfirm={newValue => {
        newValue = newValue.toUpperCase();

        if (/[0-9A-F]{6}/.test(newValue)) {
          onChange?.(newValue);
        }
        setText(null);
      }}
    />
  </Tooltip>;
}

interface AddFieldFormProps {
  onAdd: (tokenName: string, colourValue: string) => void;
}

function AddFieldForm({ onAdd }: AddFieldFormProps) {
  const [tokenName, setTokenName] = useState('');
  const [colourValue, setColourValue] = useState('FFFFFF');

  return <Card>
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <Checkbox checked disabled />
        <EditableText
          placeholder="Token Name"
          value={tokenName}
          onChange={setTokenName}
        />
      </div>
      <ColourValueField
        value={colourValue}
        onChange={setColourValue}
      />
      <div style={{ paddingTop: '5px' }}>
        <Button
          icon='add'
          disabled={tokenName.length < 1}
          onClick={() => {
            onAdd(tokenName, colourValue);
            setTokenName('');
            setColourValue('FFFFFF');
          }}
        >
          Add Item
        </Button>
      </div>
    </div>
  </Card>;
}

interface TokenCard {
  isDefault?: boolean

  isDisabled?: boolean;
  onDisabledChanged?: () => void;

  tokenName: string;
  onTokenNameChanged?: (newName: string) => void;

  colourValue: string;
  onColourValueChanged?: (newValue: string) => void;

  onRemove?: () => void;
}

function TokenCard(props: TokenCard) {
  const [hover, setHover] = useState(false);

  return <Card
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
  >
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // border: '1px solid red'
      }}>
        <Tooltip
          content={props.isDisabled ? 'Re-enable rule' : 'Temporarily disable rule'}
        >
          <Checkbox
            checked={!props.isDisabled || props.isDefault}
            disabled={props.isDefault}
            onClick={props.onDisabledChanged}
          />
        </Tooltip>
        <Tooltip
          content="Token Name"
          placement="top"
        >
          <EditableText
            value={props.isDefault ? 'Default' : props.tokenName}
            disabled={props.isDefault}
            onConfirm={props.onTokenNameChanged}
          />
        </Tooltip>
        <div style={{
          paddingTop: '5px',
          paddingLeft: '5px',
          alignSelf: 'flex-end'
        }}>
          <div style={{
            display: hover && !props.isDefault ? undefined : 'none',
          }}>
            <Tooltip
              content={<p>Remove Rule for <code>{props.tokenName}</code></p>}
              placement='top'
            >
              <Button
                icon='trash'
                onClick={props.onRemove}
              />
            </Tooltip>
          </div>
        </div>
      </div>
      <ColourValueField
        value={props.colourValue}
        onChange={props.onColourValueChanged}
      />
    </div>
  </Card>;
}

interface ThemeConfigProps {
  rules: monaco.editor.ITokenThemeRule[];
  onUpdate?: (rules: monaco.editor.ITokenThemeRule[]) => void;
}

export default function ThemeConfig({ rules, onUpdate }: ThemeConfigProps) {
  const [, setRerender] = useState(0);
  const rerender = () => setRerender(x => x + 1);

  const disabledTokensSet = useRef<Set<string>>(new Set());
  const toaster = useRef<OverlayToaster>(null);

  const updateTheme = () => {
    rerender();
    onUpdate?.(rules.filter(({ token }) => !disabledTokensSet.current.has(token)));
  };

  const showToast = (props: ToastProps) => {
    if (toaster.current) {
      toaster.current.show({
        ...props,
        timeout: 15000
      });
    }
  };

  return <div style={{
    paddingLeft: '5px'
  }}>
    <OverlayToaster ref={toaster} />
    <h2>Token Configuration</h2>
    <CardList>
      {rules.map((rule, idx) => (
        <TokenCard
          isDefault={rule.token === ''}
          tokenName={rule.token}
          colourValue={rule.foreground!}
          onTokenNameChanged={newValue => {
            rule.token = newValue;
            updateTheme();
          }}
          onColourValueChanged={newValue => {
            rule.foreground = newValue;
            updateTheme();
          }}

          isDisabled={disabledTokensSet.current.has(rule.token)}
          onDisabledChanged={() => {
            if (disabledTokensSet.current.has(rule.token)) {
              disabledTokensSet.current.delete(rule.token);
            } else {
              disabledTokensSet.current.add(rule.token);
            }

            updateTheme();
          }}
          onRemove={() => {
            disabledTokensSet.current.delete(rule.token);
            rules.splice(idx, 1);
            updateTheme();
          }}
        />
      ))}
      <AddFieldForm
        onAdd={(tokenName, colour) => {
          if (rules.some(({ token }) => token === tokenName)) {
            showToast({
              intent: 'danger',
              message: `Duplicate token ${tokenName}`
            });
          } else {
            rules.push({ token: tokenName, foreground: colour });
            updateTheme();
          }
        }}
      />
    </CardList>
  </div>;
}
