module.exports = {
    Query: {
      getPosts: async (_, args, { Post }) => {
          const posts = await Post.find({}).sort({createdDate: 'desc'}).populate({path: 'createdBy', model: 'User'});
          return posts;
      }
    },

    // value of Mutation object takes 3 arguments:
    // root, typeDefs Mutation args, context
    Mutation: {
        addPost: async (_, { title, imageUrl, description, creatorId }, { Post }) => {
          const newPost = await new Post({
              title,
              imageUrl,
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
};