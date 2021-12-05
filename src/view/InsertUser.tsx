import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface InsertUserViewProps {
    route: {
        params: {
            setUsername: any;
        };
    };
}

export const InsertUserView: React.FC<InsertUserViewProps> = (props) => {
    const { setUsername } = props.route.params;
    const navigation = useNavigation();
    const [text, setText] = useState<string>('');

    const done = (text: string) => {
        setUsername(text);
        navigation.goBack();
    };

    return (
        <View style={styles.mainContainer}>
            <TextInput
                keyboardAppearance={'light'}
                style={{ borderBottomWidth: 3, fontSize: 24 }}
                placeholder={'Type your github username'}
                allowFontScaling={false}
                value={text}
                placeholderTextColor={'grey'}
                onChangeText={(text: string) => setText(text)}
            />
            <View style={styles.bottomView}>
                <TouchableOpacity onPress={() => done(text)} style={styles.checkButton}>
                    <Text style={styles.checkButtonLabel}>DONE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 40,
        marginHorizontal: 30,
    },
    bottomView: {
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    checkButton: {
        alignSelf: 'flex-end',
    },
    checkButtonLabel: {
        fontWeight: 'bold',
        fontSize: 22,
    },
});
