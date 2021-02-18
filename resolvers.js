module.exports = {
    Query: {
      getUser: () => null
    },

    // value of Mutation object takes 3 arguments:
    // root, typeDefs Mutation args, context
    Mutation: {
        addPost: async (_, { title, imageUrl, categories, description, creatorId }, {Post}) => {
          const newPost = await new Post({
              title,
              imageUrl,
              categories,
              description,
              createdBy: creatorId
          }).save();
          return newPost;
        },
        signupUser: async(_, {username, email, password}, { User }) => {
            const user = await User.findOne({ username });
            if(user) {
                throw new Error('User already exists');
            }
            const newUser = await new User({
                username,
                email,
                password
            }).save();
            return newUser;
        }
    }
}