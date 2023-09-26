import { BsCart2 } from "react-icons/Bs";
import { CiSearch } from "react-icons/Ci";
import styles from "./styles.module.css";
const Header = () => {
  return (
    <div>
      <div className={`row ${styles.main}`}>
        <div className={styles.header}>
          <div className={`col-11 ${styles.imgs}`}>
            <img
              src="https://www.marcpridmore.com/wp-content/themes/marc-pridmore/img/mpLogo.png"
              className="mx-auto d-block"
            />
          </div>
          <div className="col-1">
            <ul>
              <li>
                <img
                  src="https://www.marcpridmore.com/wp-content/themes/marc-pridmore/img/Combined-Shape.png"
                  height="35"
                  width="25"
                />
              </li>

              <li>
                <BsCart2 size={35} />
              </li>
              <li>
                <img
                  src="data:image/png;base64,iVBO
                    Rw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAilBMVEX///8AAACnp6c
                    EBAT8/Py1tbVERERqamoNDQ36+vr39/cSEhJXV1cYGBgODg4aGhpPT08iIiK/v7/k5ORzc3Pu7
                    u6Ojo7GxsY1NTXPz88lJSXg4OArKystLS3Z2dk7OztCQkJ7e3uHh4ddXV13d3eenp6WlpZLS0u6urqioqI5OTlmZmZcXFyur
                    q5FvIUIAAAHeklEQVR4nO2ca3+qPAzANwFBcN4Qb1OnOC/T+f2/3uM5rmkrOiENhPP8+n876ZJe0jRN+
                    vJisVgsFovFYrFYLBaLxWKxWP6XxN7IX837keNE/cXKHx1ibokQJI3T7DXD3D8n3JIVwT23nawWV4K25
                    3LLl5Nk/fZIiytv6b8wLMln8Lsaf+is666KO8qhxl9VdrWeYONFPjX+MJlyS/sQd51fjQtOWtNBiT+ysi7a69Gu0diN1u1F1pA1a7mxjKMbJVbpWOvy1ji9VfWthtPL01f5PL3b23E6134WHKqW8xlf2sQ5eo9/eZ5o49aoTsY8NLTRe
                    NLNnua8nKuRMB+eMh5B2nr28zBVfu8MqpAwH2NlfcyXeb6YKoPSqc2KT7pSqk2Y75uwLb/p18VfaUqZ1vm/+pRf9cqTrQiplGhX5LuR/G5UlmxFmDpYeWQPOLkWVsnI3brA
                    vLoyhE+bZUhWjC0I0y7+cQ8+
                    Zt8XQ/CwMLYn6YuvuzmtXWnAinVQu8EYFlghO0FPCMfz
                    Ia4BH4bkqT9QKjvTqZFAT2xpJSsIOOVf2BbAWCwo5SrKVEgxQ59aXVjvnC6XTzAvYHYiVxkFrrC9kcFKDTtimdEJVpSx6EzfpJUT/9xKSUSA7uBzHYX/3jdrRhxn9jRSFccVB8OTWTvfP80EXAG7pfEmcgW2kncauQpzJhIAOoQryCXWemDYjis8R67VLuymsXMhHB0jK26AOBYZxw72Pw0hjmYkCOtraLSk2eKyv0cqJ0m4bB8UUiEQ11OFgw63iBAXlycvFPk0bUhEUyYUUiEQ9wPGxubEPLVWP/9/Y9qQiANzRbfI/j9ZjyARU9v4RCTcX+PFhgRiWobBtUS0wxXbOggBxmbtjInaQRMLAVKzduCgyXbhIyI5K7NmhKszo5AJxeZHAseoK0Oig6YBcLQzWqVfohXDg6YBYG6OJq00ScbVDLitMogHvYs2OG+tINxpcCSiCLsak0CmAPo2MxYH9g7rnRWEO9GHOxgQrgP7FYjkYHNj4HKb+4Ya7mW7OJsjjstsgQeBTBdASQLeCfeAKKsEsyvKS13eFfKHuAOdWjjxKoa0oqgGCUIy9aFo4lUis4T5vBMFmeX0Vmiihyv4kO1mRCOWOf1RgaNRIrNxkBaPnINMdApybyexnFf1yWoEl+vCZ75rp4NSmsGb86DhK5p85FgorbXyAeP9epaNIpizfub+DdR0bL5z4T1cJWn09bW//S2BYKn9dlOzkgVXnV0XVXaPDNFUU6MGO3qGVBPw1Wl72RkWpzeVMoaBpHI431YlOavUgwvfcNrwbwv6Or/UAnCynLxmCWbH/X416d/505HrXv0prfXD8sMsta1M+sty/lyDK/mKAZgYr3PrcdFkXZsqBZ2x330uvU7X54q/PyTZFahAVFnsuDOXVaannPWg9whOdZli0/1zaX+nVwdVpr1H4gWL3jAdbRveYOA1tqN02Fs8HDh2VZb31Zj728H9OsTB9nTfsrU5d8fw3gY4GT57RSA5D+/4AE7Ktuy9rN/xsctZfhuPjpmPZzwZdHFmVk1GhYqI39PMuLQZohDezXsIThuxuY1v34boVj0oraEuQGeIXKvvwxtL9llpHclS38c7Jq9RJKmuyqRCb1Iv+XZ8w5kdn/RuqWx67bSJvSfowWlT65lqAl16mKFLdFo9a7ZjWMGZK9Q8Kzp7mWjRlV7pm2OoPtsQkZZBfnWUppsla6LpQf2IRryqTBNND/qJrC2/VYmaqHqUY1pUg1ieJq6yzqOS7jQOyusqvbJslzLws9K236XiUpd04aC8CDAr8a2cWNGklGxNrxo9Ln6k1MQpwVtZBhXpoWnSIZ/CofR3+6W/waRoMqH26uVCjypws5dykyde8FDgVsq0zaIsSNI7lFha94rSvqWJjChnsjwuVHbnJ++JCd+xkY9OfVR2OdOS4SKyySUfOQoqDAdKe9+ncrpkxKTSZAuZGEJUVyKz/SrORoKVSZQnCMcdUvuRA5mcR9KDAxjhytPcZHIexRUdHKaMMvlxQHCYIG/+QNorBZGzwfwcx5thDBH/lWlLMCA8GcZLh2o+QJcw5bn5RBMCiiIcpodg34kEWIsO+SYSrDAQSTVK7Wp
                    BaJnt+hiqLfsm/iq4vVwF2i+K2TR5vbVH0Ygh0JkGyz0UK63LmCPmiukd4L156AzWHGOwwPgDFlgM1rQq8FPQdftQRMv4FtmLMrci7ASHmAxzljHMLaznCC/yMifswdzCPsAiT
                    iIRqVjFccVJEXkqAePLXjgkLpiQT6LBiLInsBs+2gefs1cOQZfiXhIT/onDntAKkxznpYjaAoagwy0iCIF67glehqtBrYrYSVCv3UGFdw3eQodLBswxEfb1GlSrwD0Txu5AL9SgPgLeFcZcM4GHw260LmZLyII5Twgf/o1cLATCAcZ48vB0bKMGiPtqzDXcvcovdjBBkHt1auzME
                    YpEz5utHsxZlVvmu2C2doNqo/LAjEj7ebPVg9lH4hqu9hkqzTj+jpxaEW1q8siFxWKxWCwWi8VisVgsFovFYrnhP2/oW4ihoQWAAAAAAElFTkSuQmCC"
                  height="35"
                  width="35"
                />
              </li>
              <li>
                <CiSearch size={35} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <ul>
          <li>Living Room</li>
          <li>Bedroom</li>
          <li>Ocatinal</li>

          <li>Lather</li>
          <li>Home office</li>
          <li>Dinning room</li>
          <li>Acceseries</li>
          <li>OutDoor</li>
          <li>meet makr</li>
          <li>Show Room</li>
          <li>Desine Service</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
