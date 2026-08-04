import '@blueprintjs/core/lib/css/blueprint.css';
import * as monaco from 'monaco-editor';
import { Button, Menu, MenuItem, Navbar } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import Editor from './Editor/Editor';
import { generateLanguageMap, getLanguageDefinition, languages } from '@sourceacademy/language-directory';
import { useState } from 'react';
import ThemeConfig from './ThemeConfig';
import { sourceTheme } from './Editor/sourceTheme';
import { SOURCE_MONACO_THEME } from './Editor/setupMonaco';

const languageMap = generateLanguageMap(languages);

/**
 * Retrieves the previously selected language from `localStorage`. If the given
 * language doesn't exist in the current language map, return `undefined`.
 */
function getLangIdFromLocalStorage() {
  const storedId = localStorage.getItem('langId');

  if (storedId == null) return undefined;
  if (!getLanguageDefinition(languageMap, storedId)) return undefined;

  return storedId;
}

export default function Main() {
  const [idx, setIdx] = useState<string | undefined>(getLangIdFromLocalStorage());
  const langDef = idx !== undefined ? languageMap.get(idx) : undefined;

  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  }}>
    <h1>Syntax Highlighting Tester</h1>
    <Navbar style={{
      marginBottom: '5px'
    }}>
      <Select
        onItemSelect={({ id }) => {
          setIdx(id);
          localStorage.setItem('langId', id);
        }}
        items={languages}
        itemRenderer={({ id, name }, { handleClick }) => (
          <MenuItem
            key={id}
            text={name}
            onClick={handleClick}
          />
        )}
        itemListRenderer={({ renderItem, items, itemsParentRef }) => (
          <Menu ulRef={itemsParentRef}>
            {items.map(renderItem)}
          </Menu>
        )}
      >
        <Button
          style={{
            marginTop: '7px'
          }}
          variant="minimal"
          text={langDef?.name ?? '-'}
          endIcon='double-caret-vertical'
        />
      </Select>
    </Navbar>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      height: '100%'
    }}>
      <div style={{ width: '70vw' }}>
        <Editor
          defaultValue={localStorage.getItem('editorText') ?? ''}
          handleEditorValueChange={newValue => {
            localStorage.setItem('editorText', newValue);
          }}
          language={typeof langDef?.monarchGrammar === 'string' ? langDef?.monarchGrammar : langDef?.id}
        />
      </div>
      <div style={{ width: '30vw' }}>
        <ThemeConfig
          rules={sourceTheme.rules}
          onUpdate={newRules => {
            monaco.editor.defineTheme(SOURCE_MONACO_THEME, {
              ...sourceTheme,
              rules: newRules
            });
            monaco.editor.setTheme(SOURCE_MONACO_THEME);
          }}
        />
      </div>
    </div>
  </div>;
}
