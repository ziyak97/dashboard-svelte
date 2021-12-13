import { writable } from 'svelte/store';
import { Status } from "$lib/shared/enums";

export const campaigns = writable([{
    id: 1,
    name: "Last 3 Month Inactive User",
    status: Status.Paused,
    createdAt: "27,2018 10:00PM",
    sent: "1,356",
    impressions: "47.96%",
    clicked: "28%",
    goal: "33%",
    postback: "0.1%",
    type: "CPI"
}, {
    id: 2,
    name: "Last 3 Month Inactive User",
    status: Status.Live,
    createdAt: "27,2018 10:00PM",
    sent: "1,356",
    impressions: "47.96%",
    clicked: "28%",
    goal: "33%",
    postback: "0.1%",
    type: "CPI"
}, {
    id: 3,
    name: "Last 3 Month Inactive User",
    status: Status.Live,
    createdAt: "27,2018 10:00PM",
    sent: "1,356",
    impressions: "47.96%",
    clicked: "28%",
    goal: "33%",
    postback: "0.1%",
    type: "CPI"
}, {
    id: 4,
    name: "Last 3 Month Inactive User",
    status: Status.Live,
    createdAt: "27,2018 10:00PM",
    sent: "1,356",
    impressions: "47.96%",
    clicked: "28%",
    goal: "33%",
    postback: "0.1%",
    type: "CPI"
}, {
    id: 5,
    name: "Last 3 Month Inactive User",
    status: Status.Paused,
    createdAt: "27,2018 10:00PM",
    sent: "1,356",
    impressions: "47.96%",
    clicked: "28%",
    goal: "33%",
    postback: "0.1%",
    type: "CPI"
}, {
    id: 6,
    name: "Last 3 Month Inactive User",
    status: Status.Live,
    createdAt: "27,2018 10:00PM",
    sent: "1,356",
    impressions: "47.96%",
    clicked: "28%",
    goal: "33%",
    postback: "0.1%",
    type: "CPI"
}, {
    id: 7,
    name: "Last 3 Month Inactive User",
    status: Status.Paused,
    createdAt: "27,2018 10:00PM",
    sent: "1,356",
    impressions: "47.96%",
    clicked: "28%",
    goal: "33%",
    postback: "0.1%",
    type: "CPI"
}, {
    id: 8,
    name: "Last 3 Month Inactive User",
    status: Status.Paused,
    createdAt: "27,2018 10:00PM",
    sent: "1,356",
    impressions: "47.96%",
    clicked: "28%",
    goal: "33%",
    postback: "0.1%",
    type: "CPI"
}, {
    id: 9,
    name: "Last 3 Month Inactive User",
    status: Status.Paused,
    createdAt: "27,2018 10:00PM",
    sent: "1,356",
    impressions: "47.96%",
    clicked: "28%",
    goal: "33%",
    postback: "0.1%",
    type: "CPI"
}, {
    id: 10,
    name: "Last 3 Month Inactive User",
    status: Status.Paused,
    createdAt: "27,2018 10:00PM",
    sent: "1,356",
    impressions: "47.96%",
    clicked: "28%",
    goal: "33%",
    postback: "0.1%",
    type: "CPI"
}, {
    id: 11,
    name: "Last 3 Month Inactive User",
    status: Status.Paused,
    createdAt: "27,2018 10:00PM",
    sent: "1,356",
    impressions: "47.96%",
    clicked: "28%",
    goal: "33%",
    postback: "0.1%",
    type: "CPI"
}, {
    id: 12,
    name: "Last 3 Month Inactive User",
    status: Status.Paused,
    createdAt: "27,2018 10:00PM",
    sent: "1,356",
    impressions: "47.96%",
    clicked: "28%",
    goal: "33%",
    postback: "0.1%",
    type: "CPI"
}, {
    id: 13,
    name: "Last 3 Month Inactive User",
    status: Status.Paused,
    createdAt: "27,2018 10:00PM",
    sent: "1,356",
    impressions: "47.96%",
    clicked: "28%",
    goal: "33%",
    postback: "0.1%",
    type: "CPI"
}]);

export function handleStatusUpdate(id: number) {
    campaigns.update(campaigns => {
        const index = campaigns.findIndex(campaign => campaign.id === id);
        campaigns[index].status = campaigns[index].status === Status.Live ? Status.Paused : Status.Live;
        return campaigns;
    });
}
