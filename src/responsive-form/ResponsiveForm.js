import React from 'react';
import styles from './ResponsiveForm.css';
class ResponsiveForm extends React.Component {
   render()  {
      return (
          <form className={styles.mainForm}>
                     <div className={styles.formContainer}>
                         <div className={styles.inputFields}>
                             <div className="bottomMargin">
                                 <label>First Name </label><br/>
                                 <input  className={styles.boxBorder} type="text" required name="firstName" placeholder="First Name" />
                             </div>
                             <div className="bottomMargin">
                                 <label>Last Name </label><br/>
                                 <input className={styles.boxBorder}  type="text" required name="lastName" placeholder="Last Name"/>
                             </div>
                             <div className="bottomMargin">
                                 <label>Email </label><br/>
                                 <input className={styles.boxBorder} type="email" required name="email" placeholder="Email"/>
                             </div>
                         </div>
                         <div className="AreaField">
                             <label> Comments </label><br/>
                             <textarea className={styles.boxBorder} name="comments" placeholder="Comments" >
                             </textarea>
                         </div>
                     </div>
                     <footer>
                         <div className="checkboxContainer">
                             <input type="checkbox" name="subscribe" /> Subscribe to follow-up comments for this post<br/>
                         </div>
                         <div>
                             <input type="submit" className={styles.submitButton} value="Submit Comment"/>
                         </div>
                     </footer>
               </form>
      );
   }
}
export default ResponsiveForm;
