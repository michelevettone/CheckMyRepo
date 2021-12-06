import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors';
import font from '../../assets/fonts/font';
import { BACK_ICON } from '../../assets/images/imagesIndex';

interface HeaderLeftProps {
    label: string;
}

export const HeaderLeft: React.FC<HeaderLeftProps> = (props) => {
    const { label } = props;
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.icon} source={BACK_ICON} />
            </TouchableOpacity>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 30,
    },
    topView: {
        marginTop: 60,
        alignItems: 'center',
    },
    label: {
        fontFamily: font.primary.bold,
        textAlignVertical: 'center',
        color: colors.BLACK,
        fontSize: 16,
    },
});
