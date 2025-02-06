import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const Skeleton = ({
  width = '100%',
  height = 20,
  borderRadius = 4,
  style,
  shimmerWidth = 100,
  duration = 1000,
  shimmerColor = 'rgba(255, 255, 255, 0.5)',
  backgroundColor = '#e1e9ee',
}) => {
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      })
    ).start();
  }, [shimmerAnim, duration]);

  const translateX = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-shimmerWidth, shimmerWidth],
  });

  return (
    <View style={[styles.container, { width, height, borderRadius, backgroundColor }, style]}>
      <Animated.View
        style={[
          styles.shimmer,
          {
            width: shimmerWidth,
            backgroundColor: shimmerColor,
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden', 
    position: 'relative',
  },
  shimmer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
});

export default Skeleton;
