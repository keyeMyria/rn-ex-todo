import React, {Component} from 'react'
import {
    Modal,
    StyleSheet,
    View,
    Image,
    Text,
    Button,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import NButton from '../NComponents/NButton'
import {white, red} from '../../utils/colors'

export default class PlaceDetail extends Component {
    render() {
        let {selectedPlace, onModelClosed, onItemDeleted} = this.props
        let modalContent = null
        if (selectedPlace) {
            modalContent = (
                <View style={styles.detailContainer}>
                    <Image style={styles.placeImage} source={selectedPlace.image}/>
                    <Text style={styles.placeName}>{selectedPlace.name}</Text> 
                </View>
            )
        }
        return (
            <Modal onRequestClose={onModelClosed} animationType="slide" visible={selectedPlace !== null}>
                <View style={styles.container}>
                    {modalContent}
                    <View style={styles.btnContainer}>
                        <TouchableOpacity>
                            <View style={styles.deleteBtn}>
                                <Icon size={30} name="ios-trash" color="red" />
                            </View>
                        </TouchableOpacity>

                        <NButton color={red} style={nBtnStyles.container} onPress={onItemDeleted}>
                            <Icon size={30} name="ios-trash" color={white} />
                            <Text style={nBtnStyles.test}>Delete</Text>
                        </NButton>

                        <Button title="Delete" color={red} onPress={onItemDeleted}/>
                        <Button title="Close" onPress={onModelClosed}/>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 22
    },
    placeImage:{
        width: '100%',
        height: 200
    },
    placeName:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28
    },
    detailContainer:{
        flex: 1,
    },
    btnContainer: {
        flex: 1,
        justifyContent: "flex-end"
    },
    deleteBtn: {
        alignItems: 'center'
    }
});

const nBtnStyles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 7,
        height: 45,
        margin: 5,
        width: 170,
        flexDirection: 'row'
    },
    text: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    }
})
