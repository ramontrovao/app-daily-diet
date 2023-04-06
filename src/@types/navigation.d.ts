export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      "create-edit-meal": {
        id?: string;
      };
      "meal-resume": {
        id: string;
      };
      feedback: {
        isOnDiet: boolean;
      };
    }
  }
}
