import React, {Component, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from '../components/Blog/MainFeaturedPost';
import FeaturedPost from '../components/Blog/FeaturedPost';
import Sidebar from '../components/Blog/Sidebar';
import Footer from '../components/Blog/Footer';
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import Nav from "../../src/components/Nav";
import SearchBar from "material-ui-search-bar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import {withRouter} from "react-router-dom";
import {Space, Spin} from "antd";
import "../views/styles.css"

const sections = [
    // { title: 'Technology', url: '#' },
    // { title: 'Design', url: '#' },
];

const mainFeaturedPost = {
    title: "FIND THE THOUGHTFUL REFLECTIONS AND SMART SOUL",
    description:
        "",
    image: 'https://itproject.s3.amazonaws.com/file/multiple-photo-1170x658.jpg',
    imgText: 'main image description',
};
/*
const featuredPosts = [
    {
        title: 'Featured post',
        date: '',
        description:
            '',
        image: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1423&q=80',
        imageText: 'Image Text',
    },
    {
        title: 'Featured post',
        date: '',
        description:
            '',
        image: 'https://images.unsplash.com/photo-1496284045406-d3e0b918d7ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        imageText: 'Image Text',
    },
];*/

const sidebar = {
    title: 'About',
    description:
        '',
    archives: [
        {title: 'September 2020', url: '#'},
        {title: 'August 2020', url: '#'},
        {title: 'July 2020', url: '#'},
        {title: 'June 2020', url: '#'},
    ],
    social: [
        {name: 'GitHub', icon: GitHubIcon},
        {name: 'Twitter', icon: TwitterIcon},
        {name: 'Facebook', icon: FacebookIcon},
    ],
};


class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            load:false
        };

        // This binding is necessary to make `this` work in the callback
        //this.updateSelected = this.updateSelected.bind(this);
        this.doSomething = this.doSomething.bind(this);
    }

    async componentDidMount() {
        this.doSomething();

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.selected !== this.state.selected) {
            this.doSomething();
        }
    }

    async doSomething() {
        let result = await this.search();
        console.log(result);
        this.setState({items: result});
        this.setState({load:false});
        return result;
    }


    search() {
        this.setState({load:true});
        var name = window.sessionStorage.getItem("keyword");
        console.log(name);
        const endpoint = "https://geniusolio.herokuapp.com/search";
        return fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name
            })
        }).then(res => {
            //console.log(res.json());
            return res.json();
        }).then(data => {
            if (data) {
                console.log(data);
                return data;
            }
        });
    }

    render() {
        if(this.state.load){
            return(
                <Space justify="center" className={"loading"} size="large">
                    <Spin size="large" tip="Loading..."/>
                </Space>)
        }

        const classes = makeStyles((theme) => ({
            mainGrid: {
                marginTop: theme.spacing(3),
            },
        }));
        const items = this.state.items;
        //console.log(JSON.parse(collections));


        return (
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="lg">
                    <Nav/>
                    <main>
                        <MainFeaturedPost post={mainFeaturedPost}/>

                        <Grid container spacing={4}>
                            {items.map((post) => (
                                <FeaturedPost key={post.userid} post={post}/>
                            ))}
                        </Grid>

                    </main>
                </Container>
                <Footer title="GeniuSolio" description="Endorse your own works."/>
            </React.Fragment>
        );
    }
}

export default withRouter(Result);