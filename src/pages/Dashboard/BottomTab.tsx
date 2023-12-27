import { View, Text, TouchableOpacity, Image } from 'react-native';
import {dashBoardIcon, homeIcon, settingsIcon, upArrowIcon} from '../../assets';

export function BottomTab({state, descriptors, navigation}: any) {
  const icons = [homeIcon, upArrowIcon, settingsIcon, dashBoardIcon];
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map(
        (route: {key: string | number; name: any; params: any}, index: any) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={label}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                height: 60,
                borderBlockColor: ' red',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons[index]}
                style={{width: 25, height: 25, opacity: isFocused ? 1 : 0.5}}
              />
              <Text
                style={{
                  color: isFocused ? '#673ab7' : '#222',
                  opacity: isFocused ? 1 : 0.6,
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
}