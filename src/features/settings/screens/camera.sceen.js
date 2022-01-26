import { Camera } from "expo-camera";
import React, { useRef, useState, useEffect, useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Text } from "../../../components/typography/textcomponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = ({ navigation }) => {
  const [isPermission, setPermission] = useState(null);
  const useCameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (useCameraRef) {
      const photo = await useCameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === "granted");
    })();
  }, []);

  if (isPermission === null) {
    return <View />;
  }

  if (isPermission === false) {
    return <Text>No Camera Permission</Text>;
  }
  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (useCameraRef.current = camera)}
        type={Camera.Constants.Type.front}
        ratio={"16:9"}
      ></ProfileCamera>
    </TouchableOpacity>
  );
};
