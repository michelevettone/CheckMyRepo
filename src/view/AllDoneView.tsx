import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors';
import font from '../../assets/fonts/font';
import { NavigationActions } from 'react-navigation';

export const AllDoneView: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.topView}>
                    <Text style={styles.label}>All done!</Text>
                    <Text style={styles.label}>Repository sent.</Text>
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.reset({
                                index: 0,
                                //@ts-ignore
                                routes: [{ name: 'MainView' }],
                            });
                        }}
                        style={styles.button}
                    >
                        <Text style={styles.buttonLabel}>COOL</Text>
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
    topView: {
        marginTop: 60,
        alignItems: 'center',
    },
    label: {
        fontFamily: font.primary.bold,
        color: colors.BLACK,
        fontSize: 32,
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
