import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";
import { ResturantInfoCardComponent } from "../component/resturantinfocard.component";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacercomponent";
import {
  RestaurantsContext,
  RestaurantsContextProvider,
} from "../../../services/resturants/resturant.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { SearchComponent } from "../component/search.component";

const ResturantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]}; ;
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loadercontainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const ResturantScreen = ({ navigation }) => {
  const { error, isLoading, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <Loadercontainer>
          <Loading
            size={50}
            animating={true}
            color={(props) => props.theme.colors.brand.primary}
          />
        </Loadercontainer>
      )}
      <SearchComponent />
      <ResturantList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ResturantDetail", {
                resturant: item,
              })
            }
          >
            <Spacer position="bottom" size="large">
              <ResturantInfoCardComponent resturant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
