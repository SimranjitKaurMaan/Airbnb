import React from 'react'
import { View, Text , Image} from 'react-native'
import styles from './styles'

const Post = () => {
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image style={styles.image} source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg'}}></Image>

            {/* Bed and Bedroom */}
            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

            {/* Type and description  */}
            <Text style={styles.description} numberOfLines={2}>
                Entire Flat.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s 
            </Text>

            {/* Old price and new price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.price}> $30 </Text>
                <Text>/ night</Text>
            </Text>

            {/* Total price */}
            <Text style={styles.totalPrice}>$230 total</Text>
        </View>
    )
}

export default Post
