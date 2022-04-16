import { gql } from "graphql-request";

export const GET_PROFILE = gql`
    query{
        profile(id: "cl21krymj01vl09jr0ko279zy"){
        id
        greeting
        name
        heading
        picture{
            downloadUrl
        }
        resume{
            downloadUrl
        }
        phone
        social
        }
    }
`;

export const GET_SKILLS = gql`
    query{
        skillsList(
            filter: {
              status: { equals: true }
            }
        ){
        count
        items{
            id
            type
            list
        }
        }
    }
`;

export const GET_PROJECTS = gql`
    query{
        projectsList(
            filter: {
              status: { equals: true }
            }
        ){
        count
        items{
            id
            title
            description
            tags
            demo
            repo
            image{
            downloadUrl
            }
        }
        }
    }
`;

export const GET_COMPANIES = gql`
    query{
        companiesList(
            filter: {
              status: { equals: true }
            }
            orderBy: dateOfJoining_DESC
        ){
        count
        items{
            id
            name
            designation
            dateOfJoining
            dateOfLeaving
            logo{
            downloadUrl
            }
            description
            experience
            type
        }
        }
    }
`;