<?php
/* Template Name: Single Book Template */

// হেডার ইন্টিগ্রেট করা
//get_header(); 

// যদি পোস্ট থাকে
if ( have_posts() ) :
    while ( have_posts() ) : the_post();
?>

    <div class="book-single-container">
        <div class="book-single-header">
            <h1 class="book-title"><?php the_title(); ?></h1>
            <p class="book-author">লেখক: <?php echo get_post_meta( get_the_ID(), 'book_author', true ); ?></p>
        </div>

        <div class="book-single-content">
            <div class="book-thumbnail">
                <?php if ( has_post_thumbnail() ) : ?>
                    <img src="<?php the_post_thumbnail_url( 'medium' ); ?>" alt="<?php the_title(); ?>" />
                <?php endif; ?>
            </div>

            <div class="book-description">
                <h3>বিবরণ</h3>
                <p><?php the_content(); ?></p>
            </div>

            <div class="book-details">
                <ul>
                    <li><strong>প্রকাশনার তারিখ:</strong> <?php the_date(); ?></li>
                    <li><strong>মূল্য:</strong> ৳<?php echo get_post_meta( get_the_ID(), 'book_price', true ); ?></li>
                    <li><strong>স্ট্যাটাস:</strong> <?php echo get_post_meta( get_the_ID(), 'book_status', true ); ?></li>
                </ul>
            </div>

            <div class="book-actions">
                <a href="#" class="buy-button">বইটি কিনুন</a>
            </div>
        </div>
    </div>

<?php
    endwhile;
else :
    echo '<p>বইটি খুঁজে পাওয়া যায়নি।</p>';
endif;

// ফুটার ইন্টিগ্রেট করা
//get_footer(); 
?>
