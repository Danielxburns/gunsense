const civicObj = {
  divisions: {
    key: {
      name: 'divisions name',
      alsoKnownAs: ['string'],
      officeIndices: [0],
    },
  },
  offices: [
    {
      name: 'name of office',
      divisionId: 'string',
      levels: [
        'country',
        'administrativeArea1',
        'administrativeArea2',
        'locality',
      ],
      roles: ['string'],
      sources: [
        {
          name: 'string',
          official: true,
        },
      ],
      officialIndices: [0],
    },
  ],
  officials: [
    {
      name: 'name of Rep',
      address: [
        {
          locationName: 'string',
          line1: 'string',
          line2: 'string',
          line3: 'string',
          city: 'string',
          state: 'string',
          zip: 'string',
        },
      ],
      party: 'string',
      phones: ['phone#'],
      urls: ['website Url'],
      photoUrl: 'photoUrl',
      emails: ['email@e.mail'],
      channels: [
        {
          type: 'social media',
          id: 'soc_media_Id',
        },
      ],
    },
  ],
};

const data = {
  normalizedInput: {
    line1: '1916 East 8th Street',
    city: 'Austin',
    state: 'TX',
    zip: '78702',
  },
  kind: 'civicinfo#representativeInfoResponse',
  divisions: {
    'ocd-division/country:us/state:tx/district_court:1': {
      name: 'TX State District Court - 1st District',
    },
    'ocd-division/country:us/state:tx/place:austin': {
      name: 'Austin city',
      officeIndices: [25],
    },
    'ocd-division/country:us': {
      name: 'United States',
      officeIndices: [0, 1],
    },
    'ocd-division/country:us/state:tx/place:austin/council_district:1': {
      name: 'Austin TX city council district 1 (effective Jan 2015)',
      officeIndices: [26],
    },
    'ocd-division/country:us/state:tx': {
      name: 'Texas',
      officeIndices: [2, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15],
    },
    'ocd-division/country:us/state:tx/county:travis': {
      name: 'Travis County',
      officeIndices: [16, 17, 18, 19, 20, 21, 22, 23],
    },
    'ocd-division/country:us/state:tx/sldu:14': {
      name: 'Texas State Senate district 14',
      officeIndices: [11],
    },
    'ocd-division/country:us/state:tx/sldl:46': {
      name: 'Texas State House district 46',
      officeIndices: [12],
    },
    'ocd-division/country:us/state:tx/cd:35': {
      name: "Texas's 35th congressional district",
      officeIndices: [3],
    },
    'ocd-division/country:us/state:tx/county:travis/council_district:1': {
      name: 'Travis County TX Commissioners Court District 1',
      officeIndices: [24],
    },
  },
  offices: [
    {
      name: 'President of the United States',
      divisionId: 'ocd-division/country:us',
      levels: ['country'],
      roles: ['headOfGovernment', 'headOfState'],
      officialIndices: [0],
    },
    {
      name: 'Vice President of the United States',
      divisionId: 'ocd-division/country:us',
      levels: ['country'],
      roles: ['deputyHeadOfGovernment'],
      officialIndices: [1],
    },
    {
      name: 'U.S. Senator',
      divisionId: 'ocd-division/country:us/state:tx',
      levels: ['country'],
      roles: ['legislatorUpperBody'],
      officialIndices: [2, 3],
    },
    {
      name: 'U.S. Representative',
      divisionId: 'ocd-division/country:us/state:tx/cd:35',
      levels: ['country'],
      roles: ['legislatorLowerBody'],
      officialIndices: [4],
    },
    {
      name: 'Governor of Texas',
      divisionId: 'ocd-division/country:us/state:tx',
      levels: ['administrativeArea1'],
      roles: ['headOfGovernment'],
      officialIndices: [5],
    },
    {
      name: 'Lieutenant Governor of Texas',
      divisionId: 'ocd-division/country:us/state:tx',
      levels: ['administrativeArea1'],
      roles: ['deputyHeadOfGovernment'],
      officialIndices: [6],
    },
    {
      name: 'TX State Commissioner of Agriculture',
      divisionId: 'ocd-division/country:us/state:tx',
      levels: ['administrativeArea1'],
      roles: ['governmentOfficer'],
      officialIndices: [7],
    },
    {
      name: 'TX State Attorney General',
      divisionId: 'ocd-division/country:us/state:tx',
      levels: ['administrativeArea1'],
      roles: ['governmentOfficer'],
      officialIndices: [8],
    },
    {
      name: 'TX State Commissioner of General Land Office',
      divisionId: 'ocd-division/country:us/state:tx',
      levels: ['administrativeArea1'],
      roles: ['governmentOfficer'],
      officialIndices: [9],
    },
    {
      name: 'TX State Railroad Commissioner',
      divisionId: 'ocd-division/country:us/state:tx',
      levels: ['administrativeArea1'],
      roles: ['governmentOfficer'],
      officialIndices: [10, 11, 12],
    },
    {
      name: 'TX State Comptroller of Public Accounts',
      divisionId: 'ocd-division/country:us/state:tx',
      levels: ['administrativeArea1'],
      roles: ['governmentOfficer'],
      officialIndices: [13],
    },
    {
      name: 'TX State Senator',
      divisionId: 'ocd-division/country:us/state:tx/sldu:14',
      levels: ['administrativeArea1'],
      roles: ['legislatorUpperBody'],
      officialIndices: [14],
    },
    {
      name: 'TX State Representative',
      divisionId: 'ocd-division/country:us/state:tx/sldl:46',
      levels: ['administrativeArea1'],
      roles: ['legislatorLowerBody'],
      officialIndices: [15],
    },
    {
      name: 'TX State Supreme Court Chief Justice',
      divisionId: 'ocd-division/country:us/state:tx',
      levels: ['administrativeArea1'],
      roles: ['judge'],
      officialIndices: [16],
    },
    {
      name: 'TX State Supreme Court Associate Justice',
      divisionId: 'ocd-division/country:us/state:tx',
      levels: ['administrativeArea1'],
      roles: ['judge'],
      officialIndices: [17, 18, 19, 20, 21, 22, 23, 24],
    },
    {
      name: 'TX State Court of Criminal Appeals Judge',
      divisionId: 'ocd-division/country:us/state:tx',
      levels: ['administrativeArea1'],
      roles: ['judge'],
      officialIndices: [25, 26, 27, 28, 29, 30, 31, 32, 33],
    },
    {
      name: 'Travis County Judge',
      divisionId: 'ocd-division/country:us/state:tx/county:travis',
      levels: ['administrativeArea2'],
      roles: ['headOfGovernment'],
      officialIndices: [34],
    },
    {
      name: 'Travis County District Attorney',
      divisionId: 'ocd-division/country:us/state:tx/county:travis',
      levels: ['administrativeArea2'],
      roles: ['governmentOfficer'],
      officialIndices: [35],
    },
    {
      name: 'Travis County Clerk',
      divisionId: 'ocd-division/country:us/state:tx/county:travis',
      levels: ['administrativeArea2'],
      roles: ['governmentOfficer'],
      officialIndices: [36],
    },
    {
      name: 'Travis County District Clerk',
      divisionId: 'ocd-division/country:us/state:tx/county:travis',
      levels: ['administrativeArea2'],
      roles: ['governmentOfficer'],
      officialIndices: [37],
    },
    {
      name: 'Travis County Attorney',
      divisionId: 'ocd-division/country:us/state:tx/county:travis',
      levels: ['administrativeArea2'],
      roles: ['governmentOfficer'],
      officialIndices: [38],
    },
    {
      name: 'Travis County Tax Assessor-Collector',
      divisionId: 'ocd-division/country:us/state:tx/county:travis',
      levels: ['administrativeArea2'],
      roles: ['governmentOfficer'],
      officialIndices: [39],
    },
    {
      name: 'Travis County Sheriff',
      divisionId: 'ocd-division/country:us/state:tx/county:travis',
      levels: ['administrativeArea2'],
      roles: ['governmentOfficer'],
      officialIndices: [40],
    },
    {
      name: 'Travis County Treasurer',
      divisionId: 'ocd-division/country:us/state:tx/county:travis',
      levels: ['administrativeArea2'],
      roles: ['governmentOfficer'],
      officialIndices: [41],
    },
    {
      name: 'Travis County Commissioner',
      divisionId:
        'ocd-division/country:us/state:tx/county:travis/council_district:1',
      levels: ['administrativeArea2'],
      roles: ['legislatorLowerBody'],
      officialIndices: [42],
    },
    {
      name: 'Mayor of Austin',
      divisionId: 'ocd-division/country:us/state:tx/place:austin',
      levels: ['locality'],
      roles: ['headOfGovernment'],
      officialIndices: [43],
    },
    {
      name: 'Austin City Council Member',
      divisionId:
        'ocd-division/country:us/state:tx/place:austin/council_district:1',
      levels: ['locality'],
      roles: ['legislatorLowerBody'],
      officialIndices: [44],
    },
  ],
  officials: [
    {
      name: 'Joseph R. Biden',
      address: [
        {
          line1: '1600 Pennsylvania Avenue Northwest',
          city: 'Washington',
          state: 'DC',
          zip: '20500',
        },
      ],
      party: 'Democratic Party',
      phones: ['(202) 456-1111'],
      urls: [
        'https://www.whitehouse.gov/',
        'https://en.wikipedia.org/wiki/Joe_Biden',
      ],
      channels: [
        {
          type: 'Twitter',
          id: 'potus',
        },
      ],
      geocodingSummaries: [
        {
          queryString:
            'The White House 1600 Pennsylvania Avenue NW Washington, DC 20500',
          featureId: {
            cellId: '9923602325795527449',
            fprint: '11513381022022344111',
          },
          featureType: 'typeCompoundBuilding',
          positionPrecisionMeters: 126.14545494347092,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Kamala D. Harris',
      address: [
        {
          line1: '1600 Pennsylvania Avenue Northwest',
          city: 'Washington',
          state: 'DC',
          zip: '20500',
        },
      ],
      party: 'Democratic Party',
      phones: ['(202) 456-1111'],
      urls: [
        'https://www.whitehouse.gov/',
        'https://en.wikipedia.org/wiki/Kamala_Harris',
      ],
      channels: [
        {
          type: 'Twitter',
          id: 'VP',
        },
      ],
      geocodingSummaries: [
        {
          queryString:
            'The White House 1600 Pennsylvania Avenue NW Washington, DC 20500',
          featureId: {
            cellId: '9923602325795527449',
            fprint: '11513381022022344111',
          },
          featureType: 'typeCompoundBuilding',
          positionPrecisionMeters: 126.14545494347092,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'John Cornyn',
      address: [
        {
          line1: '120 Constitution Avenue Northeast',
          city: 'Washington',
          state: 'DC',
          zip: '20510',
        },
      ],
      party: 'Republican Party',
      phones: ['(202) 224-2934'],
      urls: [
        'https://www.cornyn.senate.gov/',
        'https://en.wikipedia.org/wiki/John_Cornyn',
      ],
      photoUrl: 'http://bioguide.congress.gov/bioguide/photo/C/C001056.jpg',
      channels: [
        {
          type: 'Facebook',
          id: 'SenJohnCornyn',
        },
        {
          type: 'Twitter',
          id: 'JohnCornyn',
        },
      ],
      geocodingSummaries: [
        {
          queryString:
            '517 Hart Senate Office Building, 120 Constitution Ave NE, Washington DC 20510',
          featureId: {
            cellId: '9923602788763978871',
            fprint: '2526607997683318429',
          },
          featureType: 'typeGeocodedAddress',
          positionPrecisionMeters: 0,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Ted Cruz',
      address: [
        {
          line1: '2 Constitution Avenue Northeast',
          city: 'Washington',
          state: 'DC',
          zip: '20510',
        },
      ],
      party: 'Republican Party',
      phones: ['(202) 224-5922'],
      urls: [
        'https://www.cruz.senate.gov/',
        'https://en.wikipedia.org/wiki/Ted_Cruz',
      ],
      photoUrl: 'http://www.cruz.senate.gov/files/images/OfficialPortrait.jpg',
      channels: [
        {
          type: 'Facebook',
          id: 'SenatorTedCruz',
        },
        {
          type: 'Twitter',
          id: 'SenTedCruz',
        },
      ],
      geocodingSummaries: [
        {
          queryString:
            '127A Russell Senate Office Building, 2 Constitution Ave NE, Washington DC 20510',
          featureId: {
            cellId: '9923602777983093035',
            fprint: '16754435804240149550',
          },
          featureType: 'typeCompoundBuilding',
          positionPrecisionMeters: 154.99767133790925,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Greg Casar',
      address: [
        {
          line1: '1339',
          line2: '15 Independence Avenue Southeast',
          city: 'Washington',
          state: 'DC',
          zip: '20515',
        },
      ],
      party: 'Democratic Party',
      phones: ['(202) 225-5645'],
      urls: [
        'https://casar.house.gov/',
        'https://en.wikipedia.org/wiki/Greg_Casar',
      ],
      channels: [
        {
          type: 'Facebook',
          id: 'repcasar',
        },
        {
          type: 'Twitter',
          id: 'RepCasar',
        },
      ],
      geocodingSummaries: [
        {
          queryString:
            '1339 Longworth House Office Building, 15 Independence Ave SE, Washington, DC 20515',
          featureId: {
            cellId: '9923602795423060423',
            fprint: '18411854889169102830',
          },
          featureType: 'typeCompoundBuilding',
          positionPrecisionMeters: 123.49476568652042,
          addressUnderstood: false,
        },
      ],
    },
    {
      name: 'Greg Abbott',
      address: [
        {
          line1: 'Office of the Governor',
          line2: 'P.O. Box 12428',
          line3: '',
          city: 'Austin',
          state: 'TX',
          zip: '78711-2428',
        },
      ],
      party: 'Republican Party',
      phones: ['(512) 463-2000'],
      urls: [
        'https://gov.texas.gov/',
        'https://en.wikipedia.org/wiki/Greg_Abbott',
      ],
      photoUrl:
        'http://gov.texas.gov/multimedia/photos/2015-GovernorAbbott-Portrait.jpg',
      channels: [
        {
          type: 'Facebook',
          id: 'TexasGovernor',
        },
        {
          type: 'Twitter',
          id: 'GovAbbott',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12428, Austin, TX 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Dan Patrick',
      address: [
        {
          line1: "Lieutenant Governor's Office",
          line2: 'P.O. Box 12068',
          line3: '',
          city: 'Austin',
          state: 'TX',
          zip: '78711',
        },
      ],
      party: 'Republican Party',
      phones: ['(512) 463-0001'],
      urls: [
        'https://www.ltgov.texas.gov/',
        'https://en.wikipedia.org/wiki/Dan_Patrick_%28politician%29',
      ],
      photoUrl:
        'https://www.ltgov.state.tx.us/wp-content/uploads/2015/02/dan_patrick.jpg',
      emails: ['LTGConstituent.Affairs@ltgov.texas.gov'],
      channels: [
        {
          type: 'Facebook',
          id: 'ltgovtx',
        },
        {
          type: 'Twitter',
          id: 'LtGovTX',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12068, Austin, TX 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Sid Miller',
      party: 'Republican Party',
      phones: ['(512) 463-7476'],
      urls: [
        'https://www.texasagriculture.gov/',
        'https://en.wikipedia.org/wiki/Sid_Miller_%28politician%29',
      ],
      channels: [
        {
          type: 'Facebook',
          id: 'TexasDepartmentofAgriculture',
        },
        {
          type: 'Twitter',
          id: 'TexasDeptofAg',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12847, Austin, TX 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Ken Paxton',
      party: 'Republican Party',
      phones: ['(512) 463-2100'],
      urls: [
        'https://www.texasattorneygeneral.gov/',
        'https://en.wikipedia.org/wiki/Ken_Paxton',
      ],
      channels: [
        {
          type: 'Facebook',
          id: 'TexasAttorneyGeneral',
        },
        {
          type: 'Twitter',
          id: 'TXAG',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12548, Austin, TX 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Dawn Buckingham',
      party: 'Republican Party',
    },
    {
      name: 'Christi Craddick',
      party: 'Republican Party',
      phones: ['(512) 463-7140'],
      urls: ['https://en.wikipedia.org/wiki/Christi_Craddick'],
      emails: ['christi.craddick@rrc.state.tx.us'],
      channels: [
        {
          type: 'Facebook',
          id: 'railroadcommissionoftexas',
        },
        {
          type: 'Twitter',
          id: 'txrrc',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12967, Austin, TX 78711-2967',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Jim Wright',
      party: 'Republican Party',
      phones: ['(737) 900-3367'],
      emails: ['kate.zaykowski@rrc.texas.gov'],
      channels: [
        {
          type: 'Facebook',
          id: 'railroadcommissionoftexas',
        },
        {
          type: 'Twitter',
          id: 'txrrc',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12967, Austin, TX 78711-2967',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Wayne Christian',
      party: 'Republican Party',
      phones: ['(512) 463-7131'],
      urls: ['https://en.wikipedia.org/wiki/Wayne_Christian'],
      emails: ['wayne.christian@rrc.texas.gov'],
      channels: [
        {
          type: 'Facebook',
          id: 'railroadcommissionoftexas',
        },
        {
          type: 'Twitter',
          id: 'txrrc',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12967, Austin, TX 78711-2967',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Glenn Hegar',
      party: 'Republican Party',
      phones: ['(512) 463-4444'],
      urls: [
        'https://comptroller.texas.gov/',
        'https://en.wikipedia.org/wiki/Glenn_Hegar',
      ],
      channels: [
        {
          type: 'Facebook',
          id: 'txcomptroller',
        },
        {
          type: 'Twitter',
          id: 'txcomptroller',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 13528, Austin, TX 78774',
          featureId: {
            cellId: '9675057594268232119',
            fprint: '8639508465207025946',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 500,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Sarah Eckhardt',
      party: 'Democratic Party',
      phones: ['(512) 463-0114'],
      urls: [
        'https://senate.texas.gov/member.php?d=14',
        'https://en.wikipedia.org/wiki/Sarah_Eckhardt',
      ],
      channels: [
        {
          type: 'Facebook',
          id: 'SarahEckhardtAustin',
        },
        {
          type: 'Twitter',
          id: 'sarah_eckhardt',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'PO BOX 12068, AUSTIN TX 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Sheryl Cole',
      party: 'Democratic Party',
      phones: ['(512) 463-0506'],
      urls: [
        'https://house.texas.gov/members/member-page/?district=46',
        'https://en.wikipedia.org/wiki/Sheryl_Cole',
      ],
      emails: ['district46.cole@house.texas.gov'],
      channels: [
        {
          type: 'Facebook',
          id: 'SherylforTexas',
        },
        {
          type: 'Twitter',
          id: 'SherylCole1',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'PO BOX 2910, AUSTIN TX 78768',
          featureId: {
            cellId: '9675056946387487399',
            fprint: '16989431108316144436',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 500,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Nathan L. Hecht',
      party: 'Republican Party',
      phones: ['(512) 463-1312'],
      urls: [
        'http://www.txcourts.gov/supreme/',
        'https://en.wikipedia.org/wiki/Nathan_Hecht',
      ],
      channels: [
        {
          type: 'Twitter',
          id: 'SupremeCourt_TX',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12248, Austin, TX 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Brett Busby',
      party: 'Republican Party',
      phones: ['(512) 463-1312'],
      urls: [
        'http://www.txcourts.gov/supreme/',
        'https://en.wikipedia.org/wiki/J._Brett_Busby',
      ],
      channels: [
        {
          type: 'Facebook',
          id: 'justicebrettbusby',
        },
        {
          type: 'Twitter',
          id: 'SupremeCourt_TX',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12248, Austin, TX 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Debra Lehrmann',
      party: 'Republican Party',
      phones: ['(512) 463-1312'],
      urls: [
        'http://www.txcourts.gov/supreme/',
        'https://en.wikipedia.org/wiki/Debra_Lehrmann',
      ],
      channels: [
        {
          type: 'Facebook',
          id: 'JudgeDebraLehrmann',
        },
        {
          type: 'Twitter',
          id: 'SupremeCourt_TX',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12248, Austin, TX 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Evan Young',
      party: 'Republican Party',
      phones: ['(512) 463-1312'],
      urls: ['http://www.txcourts.gov/supreme/'],
      channels: [
        {
          type: 'Twitter',
          id: 'E_A_Young',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12248, Austin, TX 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Jane Bland',
      party: 'Republican Party',
      phones: ['(512) 463-1312'],
      urls: [
        'http://www.txcourts.gov/supreme/',
        'https://en.wikipedia.org/wiki/Jane_Bland',
      ],
      channels: [
        {
          type: 'Facebook',
          id: 'judgejanebland',
        },
        {
          type: 'Twitter',
          id: 'SupremeCourt_TX',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12248, Austin, TX 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Jeffrey S. Boyd',
      party: 'Republican Party',
      phones: ['(512) 463-1312'],
      urls: [
        'http://www.txcourts.gov/supreme/',
        'https://en.wikipedia.org/wiki/Jeffrey_S._Boyd',
      ],
      channels: [
        {
          type: 'Facebook',
          id: 'JusticeBoydTX',
        },
        {
          type: 'Twitter',
          id: 'SupremeCourt_TX',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12248, Austin, TX 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Jimmy Blacklock',
      party: 'Republican Party',
      phones: ['(512) 463-1312'],
      urls: [
        'http://www.txcourts.gov/supreme/',
        'https://en.wikipedia.org/wiki/Jimmy_Blacklock',
      ],
      channels: [
        {
          type: 'Twitter',
          id: 'SupremeCourt_TX',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12248, Austin, TX 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'John Phillip Devine',
      party: 'Republican Party',
      phones: ['(512) 463-1312'],
      urls: [
        'http://www.txcourts.gov/supreme/',
        'https://en.wikipedia.org/wiki/John_P._Devine',
      ],
      channels: [
        {
          type: 'Twitter',
          id: 'SupremeCourt_TX',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12248, Austin, TX 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Rebeca Huddle',
      party: 'Republican Party',
      phones: ['(512) 463-1312'],
      urls: [
        'http://www.txcourts.gov/supreme/',
        'https://en.wikipedia.org/wiki/Rebeca_Huddle',
      ],
      channels: [
        {
          type: 'Twitter',
          id: 'SupremeCourt_TX',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12248, Austin, TX 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Barbara Hervey',
      party: 'Republican Party',
      phones: ['(512) 463-1551'],
      urls: [
        'https://www.txcourts.gov/cca/about-the-court/judges/judge-barbara-hervey/',
        'https://en.wikipedia.org/wiki/Barbara_Hervey',
      ],
      channels: [
        {
          type: 'Twitter',
          id: 'TxCourts',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12308 Austin, Texas 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Bert Richardson',
      party: 'Republican Party',
      phones: ['(512) 463-1551'],
      urls: [
        'https://www.txcourts.gov/cca/about-the-court/judges/judge-bert-richardson/',
        'https://en.wikipedia.org/wiki/Bert_Richardson_%28judge%29',
      ],
      channels: [
        {
          type: 'Twitter',
          id: 'TxCourts',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12308 Austin, Texas 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'David Newell',
      party: 'Republican Party',
      phones: ['(512) 463-1551'],
      urls: [
        'https://www.txcourts.gov/cca/about-the-court/judges/judge-david-newell/',
        'https://en.wikipedia.org/wiki/David_Newell_%28judge%29',
      ],
      channels: [
        {
          type: 'Twitter',
          id: 'TxCourts',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12308 Austin, Texas 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Jesse F. McClure III',
      party: 'Republican Party',
      phones: ['(512) 463-1551'],
      urls: [
        'https://www.txcourts.gov/cca/about-the-court/judges/judge-jesse-f-mcclure-iii/',
        'https://en.wikipedia.org/wiki/Jesse_McClure',
      ],
      channels: [
        {
          type: 'Twitter',
          id: 'TxCourts',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12308 Austin, Texas 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Kevin Patrick Yeary',
      party: 'Republican Party',
      phones: ['(512) 463-1551'],
      urls: [
        'https://www.txcourts.gov/cca/about-the-court/judges/judge-kevin-yeary/',
        'https://en.wikipedia.org/wiki/Kevin_Patrick_Yeary',
      ],
      channels: [
        {
          type: 'Twitter',
          id: 'TxCourts',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12308 Austin, Texas 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Mary Lou Keel',
      party: 'Republican Party',
      phones: ['(512) 463-1551'],
      urls: [
        'https://www.txcourts.gov/cca/about-the-court/judges/judge-mary-lou-keel/',
        'https://en.wikipedia.org/wiki/Mary_Lou_Keel',
      ],
      channels: [
        {
          type: 'Twitter',
          id: 'TxCourts',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12308 Austin, Texas 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Michelle Slaughter',
      party: 'Republican Party',
      phones: ['(512) 463-1551'],
      urls: [
        'https://www.txcourts.gov/cca/about-the-court/judges/judge-michelle-slaughter/',
        'https://en.wikipedia.org/wiki/Michelle_Slaughter',
      ],
      channels: [
        {
          type: 'Twitter',
          id: 'TxCourts',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12308 Austin, Texas 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Scott Walker',
      party: 'Republican Party',
      phones: ['(512) 463-1551'],
      urls: [
        'https://www.txcourts.gov/cca/about-the-court/judges/judge-scott-walker/',
        'https://en.wikipedia.org/wiki/Scott_Walker_%28judge%29',
      ],
      channels: [
        {
          type: 'Twitter',
          id: 'TxCourts',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12308 Austin, Texas 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Sharon Keller',
      party: 'Republican Party',
      phones: ['(512) 463-1551'],
      urls: [
        'https://www.txcourts.gov/cca/about-the-court/judges/presiding-judge-sharon-keller/',
        'https://en.wikipedia.org/wiki/Sharon_Keller',
      ],
      channels: [
        {
          type: 'Twitter',
          id: 'TxCourts',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 12308 Austin, Texas 78711',
          featureId: {
            cellId: '9675056946379223897',
            fprint: '3655059361107894826',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 118.08594678413696,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Andy Brown',
      party: 'Democratic Party',
      phones: ['(512) 854-9555'],
      urls: [
        'https://www.traviscountytx.gov/commissioners-court/county-judge',
        'https://en.wikipedia.org/wiki/Andy_Brown_%28politician%29',
      ],
      emails: ['judge@traviscountytx.gov'],
      channels: [
        {
          type: 'Facebook',
          id: 'TravisCoJudge',
        },
        {
          type: 'Twitter',
          id: 'TravisCoJudge',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 1748, Austin, TX 78767',
          featureId: {
            cellId: '9675056946387487399',
            fprint: '14211413257405976801',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 500,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'José Garza',
      party: 'Democratic Party',
      phones: ['(512) 854-9400'],
      urls: [
        'https://www.traviscountytx.gov/district-attorney',
        'https://en.wikipedia.org/wiki/Jos%C3%A9_Garza',
      ],
      emails: ['tcdapublic@traviscountytx.gov'],
      channels: [
        {
          type: 'Facebook',
          id: 'traviscountyda',
        },
        {
          type: 'Twitter',
          id: 'DATravisCounty',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 1748, Austin, TX 78767',
          featureId: {
            cellId: '9675056946387487399',
            fprint: '14211413257405976801',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 500,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Dyana Limon-Mercado',
      party: 'Democratic Party',
    },
    {
      name: 'Velva L. Price',
      party: 'Democratic Party',
      phones: ['(512) 854-4295'],
      urls: ['https://www.traviscountytx.gov/district-clerk'],
      emails: ['districtclerkhelp@traviscountytx.gov'],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 679003 Austin, TX 78767-9003',
          featureId: {
            cellId: '9675056946387487399',
            fprint: '14211413257405976801',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 500,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Delia Garza',
      party: 'Democratic Party',
      phones: ['(512) 854-9415'],
      urls: ['https://www.traviscountytx.gov/county-attorney'],
      emails: ['tcaoinfo@traviscountytx.gov'],
      channels: [
        {
          type: 'Facebook',
          id: 'deliagarzaaustin',
        },
        {
          type: 'Twitter',
          id: 'DGTCAttorney',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 1748, Austin, TX 78767',
          featureId: {
            cellId: '9675056946387487399',
            fprint: '14211413257405976801',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 500,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Bruce Elfant',
      party: 'Democratic Party',
      phones: ['(512) 854-9473'],
      urls: ['https://tax-office.traviscountytx.gov/'],
      emails: ['taxoffice@traviscountytx.gov'],
      channels: [
        {
          type: 'Facebook',
          id: 'TravisCountyTaxOffice',
        },
        {
          type: 'Twitter',
          id: 'TravisCountyTax',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 1748, Austin, TX 78767',
          featureId: {
            cellId: '9675056946387487399',
            fprint: '14211413257405976801',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 500,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Sally Hernandez',
      party: 'Democratic Party',
      phones: ['(512) 854-9770'],
      urls: ['https://www.tcsheriff.org/'],
      emails: ['sally.hernandez@traviscountytx.gov'],
      channels: [
        {
          type: 'Facebook',
          id: 'TravisCOSheriff',
        },
        {
          type: 'Twitter',
          id: 'TravisCoSheriff',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 1748 Austin, TX 78767',
          featureId: {
            cellId: '9675056946387487399',
            fprint: '14211413257405976801',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 500,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Dolores Ortega Carter',
      address: [
        {
          line1: '700 Lavaca Street',
          city: 'Austin',
          state: 'TX',
          zip: '78701',
        },
      ],
      party: 'Democratic Party',
      phones: ['(512) 854-9365'],
      urls: ['https://www.traviscountytx.gov/treasurer'],
      emails: ['dolores.ortega-carter@co.travis.tx.us'],
      geocodingSummaries: [
        {
          queryString: '700 Lavaca St, Suite 1.300 Austin, TX 78701',
          featureId: {
            cellId: '9675056961996208309',
            fprint: '4351992690671999656',
          },
          featureType: 'typeCompoundBuilding',
          positionPrecisionMeters: 80.20388140297963,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Jeff Travillion',
      party: 'Democratic Party',
      phones: ['(512) 854-9020'],
      urls: ['https://www.traviscountytx.gov/commissioners-court'],
      emails: ['jeffrey.travillion@traviscountytx.gov'],
      channels: [
        {
          type: 'Facebook',
          id: 'jeffreytravillion',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'PO Box 1748 Austin, TX 78767',
          featureId: {
            cellId: '9675056946387487399',
            fprint: '14211413257405976801',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 500,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Steve Adler',
      address: [
        {
          line1: '301 W. 2nd Street',
          line2: '',
          line3: '',
          city: 'Austin',
          state: 'TX',
          zip: '78701',
        },
      ],
      party: 'Nonpartisan',
      phones: ['(512) 978-2100'],
      urls: [
        'http://www.austintexas.gov/department/mayor-steve-adler',
        'https://en.wikipedia.org/wiki/Steve_Adler_%28politician%29',
      ],
      photoUrl:
        'http://www.austintexas.gov/sites/default/files/images/10-one/Adler_Headshot.jpg',
      emails: ['steve.adler@austintexas.gov'],
      channels: [
        {
          type: 'Facebook',
          id: 'austinmayoradler',
        },
        {
          type: 'Twitter',
          id: 'MayorAdler',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 1088, Austin, TX 78767',
          featureId: {
            cellId: '9675056946387487399',
            fprint: '14211413257405976801',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 500,
          addressUnderstood: true,
        },
      ],
    },
    {
      name: 'Natasha Harper-Madison',
      party: 'Nonpartisan',
      phones: ['(512) 974-2250'],
      urls: ['http://www.austintexas.gov/austin-city-council'],
      emails: ['natasha.madison@austintexas.gov'],
      channels: [
        {
          type: 'Facebook',
          id: 'NatashaDistrict1',
        },
        {
          type: 'Twitter',
          id: 'NatashaDatx',
        },
      ],
      geocodingSummaries: [
        {
          queryString: 'P.O. Box 1088, Austin, TX 78767',
          featureId: {
            cellId: '9675056946387487399',
            fprint: '14211413257405976801',
          },
          featureType: 'typePostalCode',
          positionPrecisionMeters: 500,
          addressUnderstood: true,
        },
      ],
    },
  ],
};

function sortReps(obj) {                //take Civics object
  return obj.offices.reduce(            // reduce the offices array
    (officialsArr, office) => {         // for each office
      if (office.officialIndices.length) {  // if seat is not empty 
        office.officialIndices.map((idx) => { // get the officialsArr index of the person in office  
          let rep = officialsArr[idx]         // get person object by direct look up
          rep = { "id": idx, "officeName": office.name, "level": office.levels[0], ...rep } // create a new rep object with an id, office name and level of gov't added
          officialsArr[idx] = rep         // replace existing person obj with updated person object in the accumulator array        
        })
      }
      return officialsArr;              // when loop is done, return the new array of officials
    },
    [ ...obj.officials ]                // spread in the officials array as the initial value
  );
}

console.log(sortReps(data));
