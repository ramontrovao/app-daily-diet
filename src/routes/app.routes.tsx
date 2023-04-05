import { CreateEditMeal } from "@screens/CreateEditMeal";
import { Home } from "@screens/Home";
import { Statistics } from "@screens/Statistics";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feedback } from "@screens/Feedback";
import { MealResume } from "@screens/MealResume";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="create-meal" component={CreateEditMeal} />
      <Screen name="edit-meal" component={CreateEditMeal} />
      <Screen name="meal-resume" component={MealResume} />
      <Screen name="feedback" component={Feedback} />
    </Navigator>
  );
};
