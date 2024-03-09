<script>
  export default {
    name: "EmployerBenefits",
    data() {
      return {
        isOpen1: false,
        isOpen2: false,
        isOpen3: false,
      };
    },
    methods: {
      toggleDropdown1() {
        this.isOpen1 = !this.isOpen1;
      },
      toggleDropdown2() {
        this.isOpen2 = !this.isOpen2;
      },
      toggleDropdown3() {
        this.isOpen3 = !this.isOpen3;
      },
    },
  };
</script>

<template>
  <div class="about-company-container">
    <div class="column about-company-container_text">
      <div>
        <button @click="toggleDropdown1" class="dropbtn">
          <h1>Why understanding and acknowledging employees grief matters</h1>
        </button>
        <ul v-if="!isOpen1" class="about-company-container_text-blurb">
          <li>
            The Grief Institute Educational Foundation projects the costs of
            workplace grief at $75 billion annually… Specifically, the loss of
            loved ones costs workplaces $37.5 billion in annual productivity.
            The research done includes looking at ways to help reduce the loss
            of productivity as well as keep the employee in mind. These studies
            give employers and workplaces resources to help ease the grieving
            employee back into work, while helping mitigate the loss of
            productivity in the long run, overall saving the company money.
          </li>
        </ul>
      </div>

      <div>
        <button @click="toggleDropdown2" class="dropbtn">
          <h1>Development of grief models used in the workplace</h1>
        </button>
        <ul v-if="isOpen2" class="about-company-container_text-blurb">
          <li>
            The C.A.R.E model, and Loss and Grief in the Workplace were two
            studies done outside of the US looking at gaps in employees
            returning to work after a loss. Loss and Grief in the Workplace
            focused on workplace culture and open communication. The study was
            developed by doing a literature review.
          </li>
          <li>
            The C.A.R.E model was developed by a literature review and in person
            surveying. The C.A.R.E. Model focuses on communication,
            accommodations, recognition and emotional support.
          </li>
        </ul>
      </div>
      <div>
        <button @click="toggleDropdown3" class="dropbtn">
          <h1>What the studies found</h1>
        </button>
        <ul v-if="isOpen3" class="about-company-container_text-blurb">
          <li>
            The C.A.R.E. model found that when all four elements are utilized
            employee’s have an easier time returning to work. When an employee
            returns to work after a loss, their productivity has been seen to
            decline. The C.A.R.E. model allows the employee to receive what they
            need to return to work while mitigating the loss of productivity
            that can be seen and felt after a loss.
          </li>
          <li>
            Loss and Grief in the workplace. Overall this study highlights the
            importance of building an accepting and understanding workplace
            prior to a loss, and that these cultures need to be carried through,
            and built upon during someone’s grief in order to ease the
            transition of returning to work in a way where both the employee and
            employer are content.
          </li>
          <li>
            Both studies found that there was a lack of comfortability in
            employees asking for additional support as well as the fact that
            many employees are unaware of what resources are available to
            them.<sup>3,4</sup>
          </li>
        </ul>
      </div>
    </div>
    <div class="column about-company-container_image">
      <img src="../../assets/care.jpg" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .column {
    display: flex;
    padding: 40px;
    flex: 1;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .about-company-container {
    display: flex;
    flex-direction: row;

    margin-top: 96px;
    text-align: justify;
    position: relative;

    &_image {
      display: flex;
      justify-content: center;
      img {
        max-height: 80vh;
      }
    }
    &_text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 18px;
      font-weight: bolder;
      &-blurb {
        padding: 0px 40px 40px 40px;
        li {
          font-size: 24px;
          margin-bottom: 24px;
        }
      }
    }
  }

  .dropbtn {
    width: 100%;
    background-color: #f9f9f9;
    border: none;
    border-radius: 8px;
    margin: 10px;
    padding: 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    background-image: linear-gradient(
      to right,
      #f6d365 0%,
      #fda085 51%,
      #f6d365 100%
    );
    color: black;
    /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
      background-position: right center;
    }
  }
</style>
