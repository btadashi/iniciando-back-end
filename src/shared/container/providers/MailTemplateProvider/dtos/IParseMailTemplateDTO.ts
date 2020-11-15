interface ITemplateVariables {
  [key: string]: string | number;
}

/** Ao invés de recebermos 'template', passamos a receber 'file', ou seja,  o arquivo de nossa 'template' */
export default interface IParseMailTemplateDTO {
  file: string;
  variables: ITemplateVariables;
}
