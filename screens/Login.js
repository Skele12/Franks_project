import React from "react";
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity,
  Pressable,
  Button,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Login({navigation}) {
  return (
    <View 
      style={{ 
        flex: 1, 
        alightItems: "center",
        backgroundColor: "blue", 
        justifyContent: "center" 
      }}
    >  
      <Image
        style={{
          width: 150,
          height: 150,
          borderRadius: 20,
          marginBottom: 50,
          transform: [{rotate: "00deg"}],
         }}
         source={{
             uri: "https://www.bing.com/images/search?view=detailV2&ccid=99S9HXh8&id=0FB829F9B0C29AE22E56978F0A5A15420A5985B0&thid=OIP.99S9HXh8qKThowskf0GDngHaHa&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.f7d4bd1d787ca8a4e1a30b247f41839e%3frik%3dsIVZCkIVWgqPlw%26riu%3dhttp%253a%252f%252fwww.everydesigner.com.br%252fproducts%252f2020%252f11%252fSN_BF3B5775BDCF%252fdesc_nike-sb-dunk-low-kid-sneaker_0.jpg%26ehk%3dd4BB0ue3C4mxb1f7KWEgHNFWAuxfsjRAeUXnIbn1kuA%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1440&expw=1440&q=air+force+shoe&simid=608018883666137851&FORM=IRPRST&ck=4BDF51D1128C4C6593A7E99DDCF187C8&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0",
         }}
       />
       <Text style={{ color: "rgba(0,0,0,0.6)", fontSize: 24 }}>Welcome to</Text>
       <Text style={{ color: "White", fontSize: 30, fontWeight: "600" }}>
           Power Sneakers Shop
       </Text>
       <Pressable
         onPress={() => {
           alert("hi");
          }}
         style={{
             backgroundColor: "#e3e3e3",
             padding: 10,
             paddingHorizontal: 60,
             flexDirection: "row",
             alightItems: "center",

             borderRadius: 10,
             marginTop: 20,
         }}      
       >
         <AntDesign name="google" size={24} color="rgb(256, 100, 10)" /> 
         <Text style={{ fontSize: 17, marginLeft: 15 }}>Login with Gmail</Text>
       </Pressable>
       <TouchableOpacity
           onPress={() => {
            navigation.navigate("Home")
           }}
         activeOpacity={0.8}
         style={{
           backgroundColor: "black",
           borderRadius: 10,             
           flexDirection: "row",
           alightItems: "center",
           padding: 10,
           paddingHorizontal: 60,
           marginTop: 20,
         }}
       >
         <AntDesign name="sneaker1" size={24} color="white" />
         <Text style={{ fontSize: 17, color: "white", marginLeft: 15 }}>
           Login with Apple
         </Text>
       </TouchableOpacity>
       
       <TouchableOpacity>
         <Text style={{ marginTop: 10, fontWeight: "500", color: "grey" }}>
           Not a member?{" "}
           <Text style={{ color: "white", fontweight: "bold" }}>Signup</Text>
         </Text>
       </TouchableOpacity>
       <Button color="blue" title="click here" />
      </View>
    );
}