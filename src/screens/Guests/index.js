import React,{useState} from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'

const GuestsScreen = () => {

    const navigation = useNavigation();

    const [adults, setAdults] = useState(0);

    return (
        <View style={{justifyContent: 'space-between', height: '100%'}}>
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
                <Pressable style={styles.searchButton} onPress={()=>navigation.navigate('Search Results')}>
                    <Text style={styles.searchButtonText}>Search</Text>
                </Pressable>
              
        </View>
    )
}

export default GuestsScreen
