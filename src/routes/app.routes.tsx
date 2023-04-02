import { CreateMeal } from "@screens/CreateMeal";
import { Home } from "@screens/Home";
import { Statistics } from "@screens/Statistics";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="create-meal" component={CreateMeal} />
    </Navigator>
  );
};
