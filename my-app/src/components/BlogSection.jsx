// // client/src/components/OurBlogSection.jsx
// import React from 'react';
// import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActionArea, Button } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const BlogCard = styled(Card)(({ theme }) => ({
//   borderRadius: theme.shape.borderRadius * 2,
//   boxShadow: theme.shadows[3],
//   transition: 'transform 0.3s, box-shadow 0.3s',
//   '&:hover': {
//     transform: 'translateY(-5px)',
//     boxShadow: theme.shadows[6],
//   },
// }));

// const BlogSection = () => {
//   // Sample blog posts array; update with your own content and images
//   const blogPosts = [
//     {
//       title: 'Discover the Hidden Gems of Italy',
//       image: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       snippet: 'Explore off-the-beaten-path destinations in Italy, where history, culture, and cuisine intertwine for a unique travel experience...',
//     },
//     {
//       title: 'A Journey Through the Streets of London',
//       image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       snippet: 'London offers a mix of modern attractions and historic landmarks. Discover the best spots to explore this vibrant city...',
//     },
//     {
//       title: 'Tokyo: The Fusion of Tradition and Futurism',
//       image: 'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       snippet: 'Dive into Tokyo’s dynamic culture where ancient traditions blend seamlessly with cutting-edge technology and innovation...',
//     },
//   ];

//   return (
//     <Container sx={{ py: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600, color: '#EB662B', mb: 4 }}>
//         Our Blog
//       </Typography>
//       <Grid container spacing={4}>
//         {blogPosts.map((post, index) => (
//           <Grid item key={index} xs={12} md={4}>
//             <BlogCard>
//               <CardActionArea>
//                 <CardMedia component="img" height="200" image={post.image} alt={post.title} />
//                 <CardContent>
//                   <Typography variant="h6" gutterBottom>
//                     {post.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {post.snippet}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//               <Button size="small" color="primary" sx={{ m: 2 }}>
//                 Read More
//               </Button>
//             </BlogCard>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default BlogSection;
import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActionArea, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const BlogCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const BlogSection = () => {
  // Sample blog posts array with links
  const blogPosts = [
    {
      title: 'Discover the Hidden Gems of Italy',
      image: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      snippet: 'Explore off-the-beaten-path destinations in Italy, where history, culture, and cuisine intertwine for a unique travel experience...',
      link: 'https://visa.travunited.net/your-ultimate-travel-guide-explore-the-world-with-travunited/'
    },
    {
      title: 'A Journey Through the Streets of London',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      snippet: 'London offers a mix of modern attractions and historic landmarks. Discover the best spots to explore this vibrant city...',
      link: 'https://visa.travunited.net/discover-the-world-with-travunited-your-ultimate-travel-partner/'
    },
    {
      title: 'Tokyo: The Fusion of Tradition and Futurism',
      image: 'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      snippet: 'Dive into Tokyo’s dynamic culture where ancient traditions blend seamlessly with cutting-edge technology and innovation...',
      link: 'https://visa.travunited.net/discover-the-world-with-travunited-your-ultimate-travel-guide/'
    },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600, color: '#EB662B', mb: 4 }}>
        Our Blog
      </Typography>
      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item key={index} xs={12} md={4}>
            <BlogCard>
              <CardActionArea onClick={() => window.open(post.link, "_blank")}>
                <CardMedia component="img" height="200" image={post.image} alt={post.title} />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.snippet}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Button 
                size="small" 
                color="primary" 
                sx={{ m: 2 }} 
                onClick={() => window.open(post.link, "_blank")}
              >
                Read More
              </Button>
            </BlogCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogSection;
