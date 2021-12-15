import React from 'react';

// import RootStack
import RootStack from './navigators/RootStack';

// function HomeScreen({ navigation, route }) {
//   React.useEffect(() => {
//     if (route.params?.post) {
//       // Post update, do something with 'route.params.post'
//       // for example, send the post to the server
//     }
//   }, [route.params?.post]);
  
//   return (
//     <View style={styles.container}>
//       <Button
//         title="Create post"
//         onPress={() => navigation.navigate('CreatePost')}
//       />
//       <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => {
//           /* 1. Navigate to the Details route with params */
//           navigation.navigate('Details', {
//             itemId: 86,
//             otherParam: 'anything you want here',
//           });
//         }}
//       />
//     </View>
//   )
// }

// function CreatePostScreen({ navigation, route }) {
//   const [postText, setPostText] = React.useState('');

//   return (
//     <>
//       <TextInput 
//         multiline
//         placeholder="What's on your mind?"
//         style={{ height: 200, padding: 10, backgroundColor: 'white' }}
//         value={postText}
//         onChangeText={setPostText}
//       />
//       <Button 
//         title="Done"
//         onPress={() => {
//           // Pass and merge params back to home screen
//           navigation.navigate({
//             name: 'Home',
//             params: { post: postText },
//             merge: true,
//           });
//         }}
//       />
//     </>
//   )
// }

// function DetailsScreen({ route, navigation }) {
//   /* 2. Get the param */
//   const { itemId, otherParam } = route.params;
//   return (
//     <View style={styles.container}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details...again"
//         onPress={() => 
//           navigation.push('Details', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
//       <Button title="Go back" onPress={() => navigation.goBack()}/>
//       <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>
//     </View>
//   )
// }


export default function App() {
  return (
    <RootStack />
  );
}

