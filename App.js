import React, { useState } from 'react';
import { Text, TextInput, View, Image, Button, StyleSheet, ToastAndroid, Platform, AlertIOS } from 'react-native';


// one

// const App =()=>{
//   return(
//   <Text>Hi I am Super!</Text>
//   );
// }

//Two

// const App =()=>{
//   const name = "Sanjay";
//   return(
//   <Text>Hi I am {name}!</Text>
//   );
// }

// Three - Function

// const getFullName =(firstname,secondname,thirdname)=>{
//   return(firstname+ " "+secondname+" "+thirdname);
// }

// const App =()=>{
//   return(
//    <Text>Hi My FullName is {getFullName("Khan","Kumar","Sanjay")}</Text>
//   );
// }

//Four

// const App =()=>{
//   return(
//     <View>
//       <Text>Hello I'm</Text>
//       <TextInput style={{
//         height: 60,
//         borderRadius: 5,
//         borderColor: 'red',
//         borderWidth: 3
//       }}
//       defaultValue="Sanjay" 
//       />
    
//     </View>
//   );
// }

//Five -Call Function from another function

// const FirstFunction =()=>{
//   return(
//     <View>
//   <Text>FirstFunction</Text>
//   </View>
//   );
// }

// const App =()=>{
//   return(
//     <View>
//   <Text>Welcome to you</Text>
//   <FirstFunction />
//   </View>
//   );
// }

//Six - Props(Properties) with Function Call

// const Cat =(probs)=>{
//   return(
//     <View>
//       <Text>Best {probs.name}</Text>
//     </View>
//   );
// }

// const App = () =>{
//   return(
//     <View>
//    <Text>Hello I am</Text>
//    <Cat name="Doctor"/>
//    <Cat name="Engineer"/>
//    <Cat name="Lawyer"/>
//    </View>
//   );
// }

//Seven - Image read from uri

// const App = () =>{
//   return(
//   <View>
//     <Image source={{uri:"https://img.huffingtonpost.com/asset/5e2af54f21000017030002a1.jpeg"}}
//     style={{height:400,width:400}}/>
//     <Text>Welcome to the app</Text>
//   </View>
//   );
// }

//Eight - State

// const Cat=(probs)=>{
//   const[isHungry, setIsHungry] = useState(true);
// return(
// <View>
// <Text>I am {probs.name} and I am {isHungry ? "Hungry":"Not Hungry"} </Text>
// <Button onPress={() =>{
//   setIsHungry(false);
// }}
// disabled = {!isHungry}
// title={isHungry ? "Please give some milk..!" : "Thank you"}
// />
// </View>
// );
// }

// const App =()=>{
//   return(
//   <View>
//     <Cat name="vishwa"/>
//     <Cat name="Dinesh"/>
//   </View>
//   );
// }

// Nine - Layout Design - FlexBox

// const App = () =>{
// return(
// <View style={[styles.container,{
//   flexDirection: "column"
// }]}>

//   <View style={{flex: 1,backgroundColor: 'red'}}/>
//   <View style={{flex: 1,backgroundColor: 'white'}}/>
//   <View style={{flex: 1,backgroundColor: 'green'}}/>


//   </View>
// );
// }

// const styles = StyleSheet.create({
//   container : {
//     flex: 1,
//     backgroundColor: 'pink',
//     padding:3
//   }
// })

//Ten -  Toast

function notifyMessage() {
  if (Platform.OS === 'android') {
    ToastAndroid.show("Successfully Toast Showing", ToastAndroid.SHORT)
  } else {
    AlertIOS.alert(msg);
  }
}

const App = () =>{
  return(
    <View>
      <Text>Hi Bro... Welcome</Text>
      <Button title="Press Me" onPress={notifyMessage}/>
    </View>
  );
}


export default App;