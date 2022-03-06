
import React from 'react';
import { StyleSheet,View ,Text} from 'react-native';
import FBSearchBar from './compoent/searchbar';


class App extends React.Component{
  render(){
    return(
      <>
      <FBSearchBar/>
      <View style={styles.fakePost}/>
      <View style={styles.fakePost}/>
      <View style={styles.fakePost}/>
      </>

    )
  }
}
  


export default App;

const styles=StyleSheet.create({
fakePost:{
  backgroundColor:'e4e6eb',
  height:200,
  margin:16,
  borderRadius:16
}

})