
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Login from '../screens/Login/Login';
import SingUp from '../screens/SingUp/SingUp';
import Home from '../screens/Home/Home';
import GetBanners from '../screens/Banners/GetBanners';
import CreateBanners from '../screens/Banners/CreateBanners';
import DeleteBanners from '../screens/Banners/DeleteBanners';
import GetBanner from '../screens/Banners/GetBanner';
import Update from '../screens/Banners/Update';
import Tiendas from '../screens/Tiendas/Tiendas';
import styles from '../myDrawer/styles'
import { Text, View, TouchableOpacity, Image,  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';




function DrawerMenu(props) {
  return (
    
    <TouchableOpacity onPress={props.navigation}>
      <View style={styles.menuContainer}>
        <View style={styles.iconoContainer}>
          <Icon size={17} name={props.iconName} />
        </View>
        <View style={styles.tituloContainer}>
          <Text style={styles.tituloTxt} >{props.titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

function Menu(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bgContainer}>
        <TouchableOpacity>
          <View style={styles.userContainer}>
            <Image style={styles.userImagen} source={ require('../assets/icon1.png')} />
            <View style={styles.camaraContainer}>
              <Image style={styles.camaraIcon} source={ require('../assets/photo-camera.png')} />
            </View>
          </View>
          <View style={styles.userTitulo}>
            <Text style={styles.userSubTitulo}>Elizabeth</Text>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerMenu iconName='home'titleName='Home' navigation={()=>props.navigation.navigate('Home')} />
      <DrawerMenu iconName='bars'titleName='GetBanners' navigation={()=>props.navigation.navigate('GetBanners')}/>
      <DrawerMenu iconName='home'titleName='GetBanner' navigation={()=>props.navigation.navigate('GetBanner')}/>
      <DrawerMenu iconName='home'titleName='DeleteBanners' navigation={()=>props.navigation.navigate('DeleteBanners')}/>
      <DrawerMenu iconName='home' titleName='CreateBanners' navigation={()=>props.navigation.navigate('CreateBanners')}/>
      <DrawerMenu iconName='home'titleName='Update' navigation={()=>props.navigation.navigate('Update')}/>
      <DrawerMenu iconName='home' titleName='Store' navigation={()=>props.navigation.navigate('Tiendas')}/>
    </View>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {

  return (
    
    <NavigationContainer>
    
      <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="SingUp" component={SingUp} />
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="CreateBanners" component={CreateBanners} />
        <Drawer.Screen name="GetBanners" component={GetBanners} />
        <Drawer.Screen name="DeleteBanners" component={DeleteBanners} />
        <Drawer.Screen name="GetBanner" component={GetBanner} />
        <Drawer.Screen name="Update" component={Update} />
        <Drawer.Screen name="Tiendas" component={Tiendas} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
} 

  export default MyDrawer;
