const celeb = {
	personalinfo: {
		name: "",
		email: "",
		phone1: "",
		phone2: "",
		avtar_url: "",
		profilepic_url: "",
		image_urls: [
			{},
			{},
		] /*keep adding and removing images from this list add more, max 5*/,
		brandorderedpreviously: [
			{
				brand_id: "",
				brand_avatar: "",
				brandprofile_url: "",
				numberoforders: 0,
				sectorofoperation: 0,
			},
			{
				brand_id: "",
				brand_avatar: "",
				brandprofile_url: "",
				numberoforders: 0,
			},
		],
	},
	platforms: {
		fb: {
			fbavatar_url: "url",
			url: "",
			feestoryfb: 0,
			feevideofb: 0,
			feestaticpostfb: 0,
			feereelfb: 0,
		},
		twtr: {
			twtravatar_url: "url",
			url: "",
			feetweettwtr: 0,
			feeretweettwtr: 0,
		},
		yt: {
			ytavatar_url: "url",
			url: "",
			feeforreelyt: 0,
			feeforvideoyt: 0,
			feeforstaticpost: 0,
		},
		tktk: { tktkavatar_url: "url", url: "", feereeltktk: 0 },
		insta: {
			instaavatar_url: "url",
			url: "",
			feeforstoryinsta: 0,
			feeforvideoigtvinsta: 0,
			feeforstaticpostinsta: 0,
		},
		ordersreceived: [
			{
				brand_id: "",
				fulfilled: false,
				instructions: "",
				ordertime: "",
				ordervalue: 0,
				works: [{ worktype: "", number: 0 }, {}],
				orderratings: 5,
				reversed: false,
				satisfied: true,
			},
			{},
		],
	},
};
