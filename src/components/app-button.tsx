import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Image,
  View,
} from 'react-native';  

interface IProps {
  title?: string;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activeOpacity?: number;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconSize?: number;
  size?: 'small' | 'medium' | 'large';
  contentContainerStyle?: StyleProp<ViewStyle>;
  centerContainerStyle?: StyleProp<ViewStyle>
}

const AppButton: React.FC<IProps> = ({title, onPress, loading = false, disabled = false,  style = {}, textStyle = {}, activeOpacity = 0.8, leftIcon, rightIcon,iconSize = 20,size = 'medium',contentContainerStyle,centerContainerStyle}) => { 
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[size],
        style,
        disabled && styles.disabled,
        loading && styles.loading,
      ]}
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={disabled || loading}
    >
      <View style={[styles.contentContainer, contentContainerStyle]}>
        <View style={styles.leftContainer}>
          {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
        </View>
        <View style={[styles.centerContainer, centerContainerStyle]}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={[styles.text, textStyle]}>{title}</Text>
          )}
        </View>
        <View style={styles.rightContainer}>
          {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center', 
    marginHorizontal:10
  },
  small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  leftContainer: {
    alignItems: 'flex-start',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  text: {
    color: '#fff',
    fontSize: 13.5, 
    marginLeft: 8,
    marginRight: 8,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    // opacity: 0.6,
    backgroundColor: '#C2C2C2',
  },
  loading: { 
  },
});

export default AppButton;
