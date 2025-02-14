import { Tabs, Link } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
        <Tabs.Screen
        name="index"
        options={{
          title: 'Read QR',
          tabBarIcon: ({ color }) => <TabBarIcon name="qrcode" color={color} />,
        }}
      />
      <Tabs.Screen
        name="configure"
        options={{
          title: 'Configure',
          tabBarIcon: ({ color }) => <TabBarIcon name="sliders" color={color} />,
  
        }}
      />
      
{/*     <Tabs.Screen
    name="contest"
    options={{
      title: 'Contest',
      tabBarIcon: ({ color }) => <TabBarIcon name="gift" color={color} />,
    }}
  /> */}
    </Tabs>
  );
}
