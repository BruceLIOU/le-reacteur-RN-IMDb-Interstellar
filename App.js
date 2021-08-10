import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <View style={[styles.marginBottom15, styles.header]}>
          <Image
            style={{ height: 60, width: 70 }}
            source={require("./assets/logo-white.png")}
          />
        </View>

        <View style={[styles.padding15, styles.title]}>
          <Text style={[styles.marginBottom15, styles.h1]}>Interstellar</Text>
          <View
            style={[styles.paddingBottom30, styles.h2, styles.flexDirectionRow]}
          >
            <Text style={[styles.h2]}>2014</Text>
            <Text style={[styles.h2]}>PG-13</Text>
            <Text style={[styles.h2]}>2h 49min</Text>
            <Text style={[styles.h2]}>Adventure, Drama, Sci-Fi</Text>
          </View>
          <View style={[styles.flexDirectionRow]}>
            <Image
              style={{ height: 150, width: 100 }}
              source={require("./assets/cover.jpg")}
            />
            <View style={[styles.descriptionCard, styles.flexDirectionColumn]}>
              <Text style={[styles.description]}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>
              <TouchableOpacity
                onPress={() => {
                  alert("clicked");
                }}
                style={{
                  backgroundColor: "#0277BD",
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  width: "90%",
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    color: "#E8E8E8",
                    fontWeight: "bold",
                  }}
                >
                  + ADD TO WATCHLIST
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.rateCard, styles.flexDirectionRow]}>
            <View style={[styles.alignItemsCenter]}>
              <Entypo name="star" size={32} color="yellow" />

              <View style={[styles.flexDirectionRow, styles.alignItemsCenter]}>
                <Text style={[styles.rateLineNote]}>8.6</Text>
                <Text style={[styles.rateLineTotal]}>/10</Text>
              </View>
              <Text
                style={{ color: "#E8E8E8", fontSize: 11, color: "#AFAFAF" }}
              >
                1.1 M
              </Text>
            </View>
            <View style={[styles.alignItemsCenter]}>
              <EvilIcons name="star" size={42} color="white" />
              <Text style={{ color: "#E8E8E8", marginTop: 5 }}>RATE THIS</Text>
            </View>
            <View style={[styles.alignItemsCenter]}>
              <Image
                style={{ height: 20, width: 20, marginTop: 10 }}
                source={require("./assets/metaScore.png")}
              />
              <Text style={{ color: "#E8E8E8", marginTop: 10 }}>Metascore</Text>
              <Text
                style={{ color: "#E8E8E8", fontSize: 11, color: "#AFAFAF" }}
              >
                46 critic reviews
              </Text>
            </View>
          </View>
        </View>

        <ScrollView horizontal={true}>
          <View style={{ backgroundColor: "#212121", marginTop: 15 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 22, color: "#E8E8E8", marginLeft: 10 }}>
                Top Billed Cast
              </Text>
              <Text
                style={{ color: "#0277BD", fontWeight: "bold", paddingTop: 10 }}
              >
                SEE ALL
              </Text>
            </View>
            <View style={[styles.flexDirectionRow]}>
              <View
                style={{
                  backgroundColor: "#2A2A2A",
                  marginRight: 15,
                  marginLeft: 15,
                }}
              >
                <Image
                  style={{ height: 200, width: 150 }}
                  source={require("./assets/Matthew-McConaughey.jpg")}
                />
                <Text
                  style={[styles.actors]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Matthew McConaughey
                </Text>
                <Text
                  style={[styles.characters]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Cooper
                </Text>
              </View>
              <View style={{ backgroundColor: "#2A2A2A", marginRight: 15 }}>
                <Image
                  style={{ height: 200, width: 150 }}
                  source={require("./assets/Anne-Hathaway.jpg")}
                />
                <Text
                  style={[styles.actors]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Anne Hathaway
                </Text>
                <Text
                  style={[styles.characters]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Brand
                </Text>
              </View>
              <View style={{ backgroundColor: "#2A2A2A", marginRight: 15 }}>
                <Image
                  style={{ height: 200, width: 150 }}
                  source={require("./assets/Jessica-Chastain.jpg")}
                />
                <Text
                  style={[styles.actors]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Jessica Chastain
                </Text>

                <Text
                  style={[styles.characters]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Murph
                </Text>
              </View>

              <View style={{ backgroundColor: "#2A2A2A", marginRight: 15 }}>
                <Image
                  style={{ height: 200, width: 150 }}
                  source={require("./assets/Ellen-Burstyn.jpg")}
                />
                <Text
                  style={[styles.actors]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Ellen Burstyn
                </Text>
                <Text
                  style={[styles.characters]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Murph (Older)
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{ marginTop: 20, marginLeft: 15 }}>
          <Text style={[styles.authorsTitle]}>Director</Text>
          <Text style={[styles.authors]}>Christopher Nolan</Text>

          <Text style={[styles.authorsTitle]}>Writers</Text>
          <Text style={[styles.authors]}>
            Jonathan Nolan (written by) and Christopher Nolan (written by)
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    color: "#ffffff",
  },
  statusBar: {
    color: "#ffffff",
  },
  marginBottom15: {
    marginBottom: 15,
  },
  padding15: {
    padding: 15,
  },
  paddingBottom30: {
    paddingBottom: 30,
  },
  flexDirectionRow: {
    flexDirection: "row",
  },
  flexDirectionColumn: {
    flexDirection: "column",
  },
  alignItemsCenter: {
    alignItems: "center",
  },

  header: {
    backgroundColor: "#393939",
    padding: 10,
  },
  title: {
    backgroundColor: "#212121",
  },
  h1: {
    fontSize: 40,
    color: "#E8E8E8",
  },
  h2: {
    color: "#959292",
    marginRight: 8,
  },
  descriptionCard: {
    flex: 1,
    paddingLeft: 20,
  },
  description: {
    fontSize: 15,
    color: "#E8E8E8",
    paddingBottom: 15,
  },
  rateCard: {
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  rateLineNote: {
    color: "#E8E8E8",
    fontSize: 20,
    fontWeight: "bold",
  },
  rateLineTotal: {
    color: "#E8E8E8",
    fontSize: 16,
  },
  actors: {
    color: "#E8E8E8",
    fontSize: 13,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10,
    width: 120,
  },
  characters: {
    color: "#E8E8E8",
    fontSize: 12,
    color: "#AFAFAF",
    paddingLeft: 10,
    paddingBottom: 10,
    width: 120,
  },
  authorsTitle: {
    color: "#E8E8E8",
    fontSize: 16,
    fontWeight: "bold",
  },
  authors: {
    fontSize: 14,
    color: "#AFAFAF",
    marginBottom: 12,
  },
});

export default App;
