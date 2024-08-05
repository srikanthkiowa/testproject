import * as React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native"; // Hook provided by React Navigation

const CustomHeader = () => {
  const navigation = useNavigation(); // Hook to access navigation prop

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title="Title" />
      <Appbar.Action icon="calendar" onPress={() => {}} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default CustomHeader;
