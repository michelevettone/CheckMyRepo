import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { pushToInsertRepo, pushToInsertUser } from '../navigation/navigation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { checkRepo } from '../functions';

export const MainView: React.FC = () => {
    const navigation: StackNavigationProp<any> = useNavigation();
    const [username, setUsername] = useState<string>('');
    const [repo, setRepo] = useState<string>('');

    return (
        <View style={styles.mainContainer}>
            <View style={styles.topView}>
                <Text style={styles.titleLabel}>Set the repository address</Text>
            </View>
            <View style={styles.middleView}>
                <Text style={{ fontSize: 36 }}>github.com</Text>
                <TouchableOpacity onPress={() => pushToInsertUser(navigation, setUsername)}>
                    <Text style={{ fontSize: 36 }}>
                        /<Text style={{ color: 'grey' }}>{username ? username : 'user'}</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pushToInsertRepo(navigation, setRepo)}>
                    <Text style={{ fontSize: 36 }}>
                        /<Text style={{ color: 'grey' }}>{repo ? repo : 'repo'}</Text>
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomView}>
                <TouchableOpacity onPress={() => checkRepo(username, repo)} style={styles.checkButton}>
                    <Text style={styles.checkButtonLabel}>CHECK</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        marginTop: 40,
        marginLeft: 30,
    },
    topView: {},
    titleLabel: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    middleView: {
        width: '100%',
        marginTop: 40,
    },
    bottomView: {
        justifyContent: 'center',
        position: 'absolute',
        bottom: 40,
        right: 30,
    },
    checkButton: {
        alignSelf: 'flex-end',
        marginRight: 30,
    },
    checkButtonLabel: {
        fontWeight: 'bold',
        fontSize: 22,
    },
});
