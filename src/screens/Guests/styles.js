import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    row:{
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingVertical: 20,
     borderBottomWidth: 1,
     marginHorizontal: 20,
     borderColor: 'lightgrey'
    },
    title:{
      fontWeight: 'bold'
    },
    subtitle:{
      color:'lightgrey'
    },
    buttons:{
     flexDirection: 'row',
     alignItems: 'center'
    },
    button:{
      width: 30,
      height: 30,
      borderWidth: 1,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'grey',
    },
    value:{
      marginHorizontal: 20,
      fontSize: 15,
      color: 'grey'
    },
    sign:{
        fontSize: 20,
        color: 'grey'
    }
})

export default styles
