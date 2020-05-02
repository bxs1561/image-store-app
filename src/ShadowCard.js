import React from 'react';
import {Card} from 'react-native-elements';
import {StyleSheet} from 'react-native';

const ShadowCard = (props) => {
    // const {children, elevation, opacity, cornerRadius} = props;

    // return <Card containerStyle={styles.shadow}>{children}</Card>;
    const {children, rounded, ...otherProps} = props;
    return (
        <Card containerStyle={styles.shadow(rounded)} {...otherProps}>
            {children}
        </Card>
    );
};
const styles = StyleSheet.create({
    // shadow: {
    //     shadowRadius: 4,
    //     shadowOpacity: 0.25,
    //     shadowOffset: {width: 0, height: 2},
    //     borderRadius: 15,
    //     shadowColor: 'black',
    //     elevation: 5,
    shadow: (rounded) => ({
        borderRadius: rounded ? 15 : undefined,
        shadowColor: 'black',
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,

    }),
});
export default ShadowCard;
