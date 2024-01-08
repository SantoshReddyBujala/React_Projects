import { Component } from "react";

export type ProfileProps ={
    name: string
}

export class Profile extends Component<ProfileProps> {
    render() {
        return(
            <div>Private Profile Component. Name is {this.props.name}</div>
        )
    }
}