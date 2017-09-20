declare interface IHelloWorldStrings {
  PropertyPaneDescription: string;
  DataGroupName: string;
  ListNameFieldLabel: string;
}

declare module 'helloWorldStrings' {
  const strings: IHelloWorldStrings;
  export = strings;
}