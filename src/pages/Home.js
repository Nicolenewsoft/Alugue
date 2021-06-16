import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import New from '../components/New';
import House from '../components/House';
import Recommended from '../components/Recommended';
import { useNavigation } from '@react-navigation/native'

export default function Home(){
    const navigation = useNavigation();
    return(
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: 'FFF'}}
        >
            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <Feather name="search" size={24} color="black"/>
                        <TextInput
                            placeholder="O que está procurando?"
                            style={styles.input}
                        />
                </View>
            </View>

            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                <New
                    cover={require('../assets/house5.jpeg')}
                    name="Casa de praia"
                    description="Casa nova, há uma quadra do mar, lugar seguro e monitorado 24hrs"
                    onPress={() => navigation.navigate('detail')}
                />
                <New
                    cover={require('../assets/house5.jpeg')}
                    name="Casa de praia"
                    description="Casa nova, há uma quadra do mar, lugar seguro e monitorado 24hrs"
                    onPress={() => {}}
                />
                <New
                    cover={require('../assets/house5.jpeg')}
                    name="Casa de praia"
                    description="Casa nova, há uma quadra do mar, lugar seguro e monitorado 24hrs"
                    onPress={() => {}}
                />
            </ScrollView>

            <View style={{flexDirection: 'row', marginBottom: 10, alignItems: 'center'}}>
                <Text style={[styles.title, {marginTop: 20}]}>
                    Próximo de você
                </Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15}}>
                <House
                    cover={require('../assets/house4.jpeg')}
                />
                <House
                    cover={require('../assets/house5.jpeg')}
                />
                <House
                    cover={require('../assets/house6.jpeg')}
                />
            </ScrollView>

            <Text style={[styles.title, {marginTop: 20}]}>
                Dica do dia
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                <Recommended
                    cover={require('../assets/house1.jpeg')}
                    house="Casa Floripa"
                    offer="25%"
                />

                <Recommended
                    cover={require('../assets/house4.jpeg')}
                    house="Casa São Paulo"
                    offer="15%"
                />
                <Recommended
                    cover={require('../assets/house6.jpeg')}
                    house="Casa de Praia"
                    offer="10%"
                />
            </ScrollView>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#FFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10
    },
    input: {
        paddingHorizontal: 10,
        fontSize: 10,
        width: '90%'
    },
    title:{
        paddingHorizontal: 15,
        fontSize: 18,
        color: '#4f4a4a'
    }
});