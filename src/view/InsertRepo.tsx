import { useNavigation } from '@react-navigation/native';
import React, { createRef, useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import colors from '../../assets/colors';
import font from '../../assets/fonts/font';

interface InsertRepoViewProps {
    route: {
        params: {
            repo: string;
            setRepo: any;
        };
    };
}

export const InsertRepoView: React.FC<InsertRepoViewProps> = (props) => {
    const { repo, setRepo } = props.route.params;
    const navigation = useNavigation();
    const [text, setText] = useState<string>(repo);
    const inputRef = createRef<TextInput>();

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const done = (text: string) => {
        setRepo(text);
        navigation.goBack();
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.innerContainer}>
                <TextInput
                    ref={inputRef}
                    keyboardAppearance={'light'}
                    style={styles.textInput}
                    placeholder={'Type your repository name'}
                    allowFontScaling={false}
                    value={text}
                    placeholderTextColor={colors.GREY}
                    onChangeText={(text: string) => setText(text)}
                />
                <View style={styles.bottomView}>
                    <TouchableOpacity
                        onPress={() => {
                            done(text);
                        }}
                        style={styles.button}
                    >
                        <Text style={styles.buttonLabel}>DONE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        marginTop: 60,
        marginBottom: 30,
        marginHorizontal: 40,
    },
    textInput: {
        borderBottomWidth: 3,
        fontSize: 22,
        fontFamily: font.primary.regular,
    },
    bottomView: {
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    button: {
        alignSelf: 'flex-end',
    },
    buttonLabel: {
        fontFamily: font.primary.bold,
        color: colors.BLACK,
        fontSize: 22,
    },
});
