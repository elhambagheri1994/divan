import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    yPadding="py-0"
    title="شرکت خدمات مسافرتی و گردشگری دیوان سیر آسمان"
    description="با ما به ماجراجویی و کاوش در جهان بپردازید. تیم ما با داشتن دفاتر مستقر در کشورهای اسپانیا ، آلمان ، فرانسه و کانادا ، آماده خدمات‌رسانی ویژه به شما می‌باشد."
  >
    <VerticalFeatureRow
      title="سفر به دور دنیا با آسایش و راحتی"
      description=" خدمات برتر ما به شما امکان می‌دهند هر جایی از جهان را به آسانی کاوش کنید و تمام لذت‌های یک سفر لوکس و مطمئن را تجربه کنید."
      image="/assets/images/image2.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="خدمات شخصی‌سازی شده بر اساس سلیقه شما"
      description="سفر خود را برنامه ریزی کنید و از تجربه منحصر بفرد و خدمات متمایز ما بهره‌مند شوید."
      image="/assets/images/image3.jpg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
