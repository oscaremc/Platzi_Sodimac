import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import singUp from "./screens/SingUp/SingUp";
import CreateBanners from "./screens/Banners/CreateBanners";
import GetBanners from "./screens/Banners/GetBanners";

function CustomHeader({ title, isHome, navigation }) {
  return (
    <View style={{ flexDirection: "row", height: 50, marginTop: 50 }}>
      <View style={{ flex: 1 }}>
        {isHome ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 25, marginTop: 5 }}
              source={require("./assets/menu.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={{ width: 20, height: 20, marginLeft: 5 }}
              source={require("./assets/Back.png")}
              resizeMode="contain"
            />
            <Text>Back</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={{ flex: 1.5, justifyContent: "center" }}>
        <Text style={{ textAlign: "center" }}>{title}</Text>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <View
        style={{ height: 150, alignItems: "center", justifyContent: "center" }}
      >
        <Image
          source={require("./assets/user.png")}
          style={{ height: 100, width: 100, borderRadius: 60, marginTop: 280 }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate("HomeDetail")}
        >
          <Home />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
function HomeScreenDetail({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home Detail" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
      </View>
    </SafeAreaView>
  );
}

function SettingScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="settings" navigation={navigation} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate("SettingDetail")}
        >
          <Text>Go Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
function SettingScreenDetail({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="settings  detail " navigation={navigation} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings detail!</Text>
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ height: 150, alignItems: "center", justifyContent: "center" }}
      >
        <Image
          source={require("./assets/user.png")}
          style={{ height: 100, width: 100, borderRadius: 60, marginTop: 280 }}
        />
      </View>
      <ScrollView style={{ marginLeft: 20 }}>
        <TouchableOpacity
          style={{ marginTop: 190 }}
          onPress={() => props.navigation.navigate("MenuTab")}
        >
          <Text>MenuTab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate("Home")}
        >
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate("SingUp")}
        >
          <Text>SingUp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate("CreateBanners")}
        >
          <Text>CreateBanners</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate("GetBanners")}
        >
          <Text>GetBanners</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate("Notifications")}
        >
          <Text>Notifications</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const Tab = createBottomTabNavigator();

const NavOptionHandler = () => ({
  headerShown: false,
});

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        name="Main"
        component={HomeScreen}
        options={NavOptionHandler}
      />
      <StackHome.Screen
        name="MainDetail"
        component={HomeScreenDetail}
        options={NavOptionHandler}
      />
    </StackHome.Navigator>
  );
}

const StackSetting = createStackNavigator();

function SettingStack() {
  return (
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen
        name="Setting"
        component={SettingScreen}
        options={NavOptionHandler}
      />
      <StackSetting.Screen
        name="SettingDetail"
        component={SettingScreenDetail}
        options={NavOptionHandler}
      />
    </StackSetting.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? require("./assets/home.png")
              : require("./assets/home-back.png");
          } else if (route.name === "Settings") {
            iconName = focused
              ? require("./assets/slayder.png")
              : require("./assets/slayder-back.png");
          }

          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Settings" component={SettingStack} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MenuTab"
        drawerContent={(props) => CustomDrawerContent(props)}
      >
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="SingUp" component={singUp} />
        {/* <Drawer.Screen name="Main" component={Home} /> */}
        <Drawer.Screen name="CreateBanners" component={CreateBanners} />
        <Drawer.Screen name="GetBanners" component={GetBanners} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
