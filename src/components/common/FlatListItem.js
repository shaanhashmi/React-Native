import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity, Modal, TouchableHighlight, Alert } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import CustomModal from "./CustomModal";

class FlatListItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			data: [],
			page: 1,
			seed: 1,
			error: null,
			refreshing: false,
			visible: false,
			userDetails: null,
			searchValue: ''
		};
	}

	componentDidMount() {
		this.makeRemoteRequest();
	}

	makeRemoteRequest = () => {
		const { page, seed } = this.state;
		const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
		this.setState({ loading: true });

		fetch(url)
			.then(res => res.json())
			.then(res => {
				this.setState({
					data: page === 1 ? res.results : [...this.state.data, ...res.results],
					error: res.error || null,
					loading: false,
					refreshing: false
				});
			})
			.catch(error => {
				this.setState({ error, loading: false });
			});
	};

	handleRefresh = () => {
		this.setState({
			page: 1,
			seed: this.state.seed + 1,
			refreshing: true
		}, () => {
			this.makeRemoteRequest();
		});
	};

	handleLoadMore = () => {
		this.setState(
			{ page: this.state.page + 1 },
			() => { this.makeRemoteRequest(); }
		);
	};

	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					width: "86%",
					backgroundColor: "#CED0CE",
					marginLeft: "14%"
				}}
			/>
		);
	};

	renderHeader = () => {
		return <SearchBar onChange={(txt) => this.setState({ searchValue: txt })} placeholder="Type Here..." lightTheme round />;
	};

	renderFooter = () => {
		// if (!this.state.loading) return true;
		return (
			<View
				style={{
					paddingVertical: 20,
					borderTopWidth: 1,
					borderColor: "#CED0CE"
				}}
			>
				<ActivityIndicator animating size="large" />
			</View>
		);
	};

	onPressItem = (data) => {
		this.setState({ visible: true, userDetails: data });
	}

	onPressClose = (data) => {
		this.setState({ visible: false })
	}


	render() {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
				<FlatList containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}
					data={this.state.data}
					renderItem={({ item }) => (
						<TouchableOpacity>
							<ListItem
								onPress={() => this.onPressItem(item)}
								title={`${item.name.first} ${item.name.last}`}
								subtitle={item.email}
								leftAvatar={{ source: { uri: item.picture.thumbnail } }}
								containerStyle={{ borderBottomWidth: 0 }}
							/>
						</TouchableOpacity>
					)}
					keyExtractor={item => item.email}
					ItemSeparatorComponent={this.renderSeparator}
					ListHeaderComponent={this.renderHeader}
					ListFooterComponent={this.renderFooter}
					onRefresh={this.handleRefresh}
					refreshing={this.state.refreshing}
					onEndReached={this.handleLoadMore}
					onEndReachedThreshold={50}
				/>

				{this.state.visible
					? (<CustomModal visible={this.state.visible} onPressClose={this.onPressClose} userDetail={this.state.userDetails} />)
					: null
				}

			</SafeAreaView>
		);
	}
}

export default FlatListItem;