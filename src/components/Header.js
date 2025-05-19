import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { lightBlueColor } from '../constants/Color';
import { heightPercentageToDP as hp } from '../utils';
import { style } from '../constans/Fonts';

const Header = ({ title, onBack }) => {
    const navigation = useNavigation();
    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            navigation.goBack();
        }
    };
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                <Ionicons name="arrow-back" size={28} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

const styles = {
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 4,
        height: hp(7),
        backgroundColor: lightBlueColor
    },
    backButton: {
        padding: 8,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: style.fontWeightMedium.fontWeight,
    },
};

export default Header;
