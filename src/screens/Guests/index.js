import React,{useState} from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const GuestsScreen = () => {

    const [adults, setAdults] = useState(0);

    return (
        <View> 
            <View style={styles.row}>
              <View>
                  <Text style={styles.title}>Adults</Text>
                  <Text style={styles.subtitle}>Ages 13 or above</Text>
              </View>
             <View style={styles.buttons}>
                 <Pressable 
                  style={styles.button}
                  onPress={()=> setAdults(Math.max(0,adults - 1))}>
                     <Text style={styles.sign}>-</Text>
                 </Pressable>
                 <Text style={styles.value}>{adults}</Text>
                 <Pressable 
                  style={styles.button}
                  onPress={()=> setAdults(adults + 1)}>
                     <Text style={styles.sign}>+</Text>
                 </Pressable>
             </View>
             </View>
        </View>
    )
}

export default GuestsScreen
