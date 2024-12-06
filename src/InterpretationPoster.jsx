import { useEffect, useState } from 'react'
import templates from "./madeTemplates.jsx";
import "./InterpretationPoster.css";

function InterpretationPoster() {

  let [template, setTemplate] = useState(1);
  let [fields, setFields] = useState({});
  let [margin, setMargin] = useState(0);

  let currentTemplate = templates[template];

  function updateTemplate(resetDefaults) {
    currentTemplate = templates[template];

    let defaultState = structuredClone(fields);

    for(let i = 0; i < currentTemplate.instancesPerPage; i++) {
      
      if(!defaultState[i]) { defaultState[i] = {}; }
      
      for(let j = 0; j < currentTemplate.props.length; j++) {
        if(resetDefaults || !defaultState[i][currentTemplate.props[j].name]) {
          defaultState[i][currentTemplate.props[j].name] = currentTemplate.props[j].default;
        }
      }
    }


    setFields(defaultState);
  }

  useEffect(() => updateTemplate(true), []);
  useEffect(() => updateTemplate(false), [template]);

  useEffect(() => {
    document.documentElement.style.setProperty("--margin", `${margin}in`);
  }, [margin])


  function renderEditorFieldInstances() {

    let allInstances = [];


    for(let i = 0; i < currentTemplate.instancesPerPage; i++) {
      let instanceElements = currentTemplate.props.map((prop) => {

        return(<div key={prop.name} className="inputField">
          <label htmlFor={`${prop.name}Input`}>{prop.customTitle || prop.default}</label>
          <prop.type
            name={`${prop.name}Input`}
            onChange={
              (evt) => {
                let newState = structuredClone(fields);
                newState[i][prop.name] = evt.target.value;
                setFields(newState);
            }} 
            defaultValue={prop.default} 
          />
        </div>);
      });
      
      allInstances.push(<div key={i} className="editor-instance-wrapper">{instanceElements}</div>);
    }

    return allInstances;
  }

  function renderTemplateInstances() {

    let instanceElements = [];

    for(let i = 0; i < currentTemplate.instancesPerPage; i++) {
      instanceElements.push(<currentTemplate.template key={i} {...fields[i]} />)
    }
    return instanceElements;
  }

  return (
    <>
      <style type="text/css">{currentTemplate.inlineStyles}</style>
      <div className="editorWrapper">
        <div className="editor-container">
          <h2>Interpretation Editor</h2>
          <div className="editor-instance-wrapper">
            <div className="inputField">
              <label htmlFor="styleSelector">Style</label>
              <select name="styleSelector" defaultValue={template} onChange={(evt) => { setTemplate(evt.target.value); }}>
                {templates.map((template, index) => {
                  return <option key={template.name} value={index} >{template.name}</option>
                })}
              </select>
            </div>
            <div className="inputField">
              <label htmlFor="marginSelector">Margins</label>
              <select name="marginSelector" onChange={(evt) => { setMargin(evt.target.value); }}>
                <option value={0}>No margin</option>
                <option value={.125}>1/8in</option>
                <option value={.25}>1/4in</option>
              </select>
            </div>
          </div>
          {renderEditorFieldInstances()}
        </div>
        <div className="poster-container">
          {renderTemplateInstances()}
        </div>
      </div>
    </>
  );
}

export default InterpretationPoster
