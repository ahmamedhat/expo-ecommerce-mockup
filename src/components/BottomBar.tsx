import React from "react";
import { I18nManager, TouchableOpacity, View } from "react-native";
import BottomBarIcon from "./BottomBarIcon";
import { DeviceScreen } from "@utils/constants";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

function BottomBar({ state, descriptors, navigation }: any) {
  const routesCount = state.routes.length;
  const Width = DeviceScreen.Width - 20;
  const IndicatorWidth = Width / routesCount;
  const rtl = I18nManager.isRTL;

  const translateAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(
            IndicatorWidth * (rtl ? -state.index : state.index),
            {
              duration: 200,
            }
          ),
        },
      ],
    };
  });

  return (
    <View
      className={
        "flex flex-row self-center absolute bottom-6 bg-primaryButton h-[8vh] items-center justify-around rounded-full overflow-hidden"
      }
      style={{ width: Width }}
    >
      <Animated.View
        className="absolute left-0 right-0 bottom-0 top-0 items-center justify-center rounded-full"
        style={[{ width: IndicatorWidth }, translateAnimation]}
      >
        <View className={"rounded-full bg-white w-[54px] h-[54px] -z-10"} />
      </Animated.View>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];

        const isActive = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isActive && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            className="justify-center items-center h-full"
            style={{ width: Width / routesCount }}
            key={route.index + route.name}
            accessibilityRole="button"
            accessibilityState={isActive ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <View>
              <BottomBarIcon routeName={route.name} isActive={isActive} />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default BottomBar;
