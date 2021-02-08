const sendQuery = require('./utils/send-query');

const LOAD_ALL_USERS = `
  {
    allUsers {
      data {
        _id
        userName
        githubName
        academyProfile
        githubProfile
        course
        project
      }
    }
  }
`;

exports.handler = async () => {
  const { data, errors } = await sendQuery(LOAD_ALL_USERS);

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ users: data.allUsers.data }),
  };
};
