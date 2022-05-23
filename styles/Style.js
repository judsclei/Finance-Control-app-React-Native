import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  app: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#1d3a4e",
  },
  conteudo: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },

  headerBar: {
    height: 65,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  appName: {
    color: "white",
    fontSize: 25,
    marginLeft: 12,
  },
  badge: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    padding: 5,
    minWidth: 20,
    textAlign: "center",
    marginRight: 12,
    fontSize: 16,
    fontWeight: "bold",
  },

  component: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", 
    alignItems: "stretch",
    margin: 18,
  },
  componentHeader: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
    marginBottom: 20,
  },
  componentContent: { 
    flex: 1, 
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",  
    alignItems: "stretch",
  },

  // títulos
  h1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 14,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 8,
    fontWeight: "bold",
  },

  // Listas
  li: {
    padding: 16,
    borderColor: "#dce5e8",
    borderStyle: "solid",
    borderWidth: 2,
    borderTopWidth: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  li1: {
    borderTopWidth: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  liN: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  liText: {
    fontSize: 15,
  },
  // tabelas
  table: {
    overflowX: "auto",
    borderCollapse: "collapse",
    width: "100%",
    textAlign: "left",
  },
  
  tableTrNthChildEven: {
    backgroundColor: "#e9e9e9"
  },
  tableThead: {
    backgroundColor: "#2D6D9B",
    color: "#fff",
    fontSize: 15,
    padding: 10,
    borderColor: "#dce5e8",
    borderStyle: "solid",
    borderWidth: 2,
    borderTopWidth: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tableTbodyHover: {
    backgroundColor: "#2D6D9B",
    color: "#fff"
  },
  tableButtonButton: {
    padding: "0.10em",
    height: 30,
    width: 32,
    borderRadius: 10
  },
  // cores
  active: {
    color: "#fff",
    backgroundColor: "#3b78ac",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2a679b",
  },
  primary: {
    color: "#fff",
    backgroundColor: "#3b78ac",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2a679b",
  },
  secondary: {
    color: "#000",
    backgroundColor: "#cddfeb",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#bcceda",
  },
  success: {
    color: "#fff",
    backgroundColor: "#2a9d8f",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#198c7e",
  },
  warning: {
    color: "#000",
    backgroundColor: "#ffd166",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#eec055",
  },
  danger: {
    color: "#fff",
    backgroundColor: "#ef233c",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#de122b",
  },
  light: {
    color: "#000",
    backgroundColor: "#edf6f9",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#dce5e8",
  },
  dark: {
    color: "#fff",
    backgroundColor: "#212121",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#212121",
  },


  // espaçamentos
  mt1: {
    marginTop: 12,
  },
  mt2: {
    marginTop: 24,
  },
  mt3: {
    marginTop: 36,
  },
  mt4: {
    marginTop: 48,
  },
});